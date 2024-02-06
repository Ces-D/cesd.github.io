use core::panic;

use convert_case::{Case, Casing};
use slugify_rs::slugify;
use tabled;

use crate::files::{articles, metadata};
use crate::models::{
    AddArticlePresentation, AnalyticsData, InterestData, Metadata, MetadataSimple, Slug,
};
use crate::ollama::{
    generate_article_category, generate_article_description, generate_article_keywords,
};

mod add_article_command;
mod delete_article_command;
mod list_article_command;

pub async fn generate_analytics_data(contents: &String) -> AnalyticsData {
    let reading_options = estimated_read_time::Options::default();
    let reading_time = estimated_read_time::text(contents, &reading_options);
    let length_in_words = reading_time.word_count();
    let reading_time_in_minutes = reading_time.seconds() / 60;
    let published_on = chrono::Utc::now();
    let updated_on = chrono::Utc::now();
    return AnalyticsData { length_in_words, reading_time_in_minutes, published_on, updated_on };
}

async fn generate_interest_data(contents: &String) -> InterestData {
    let curated_links = vec![];
    let related_posts = std::collections::HashSet::new();
    let category = generate_article_category(contents).await;
    let keywords = generate_article_keywords(contents).await;
    return InterestData { curated_links, related_posts, category, keywords };
}

pub async fn run() {
    let cli = clap::Command::new("cesdia-site")
        .about("A tool for managing the cesdia site")
        .bin_name("cesdia-site")
        .subcommand_required(true)
        .subcommands([
            list_article_command::command(),
            add_article_command::command(),
            delete_article_command::command(),
        ])
        .get_matches();

    match cli.subcommand() {
        Some((list_article_command::LIST_COMMAND_NAME, _)) => {
            // This should either check or create the metadata file
            let metadata = metadata::read_metadata_file();
            let metadata = metadata.iter().map(|m| MetadataSimple::from(m));
            let presentation = tabled::Table::new(metadata);
            print!("{}", presentation);
        },

        Some((add_article_command::ADD_COMAND_NAME, matches)) => {
            let (path, title) = add_article_command::parse_matches(matches);
            let slug = Slug(slugify!(title.as_str()));
            let mut metadata = metadata::read_metadata_file();

            if !articles::is_accepted_format(&path) {
                panic!("Orignal source is not in accepted format")
            }
            if articles::article_published(&slug) {
                panic!("Article previously added: {}", slug);
            }
            if metadata::is_metadata_captured(&slug, &metadata) {
                panic!("Article metadata previously captured: {}", slug)
            }

            let copied_path = articles::mv_to(&path, &slug);
            let contents = articles::read_article_file(&copied_path);
            let data = Metadata {
                title: title.to_case(Case::Title),
                description: generate_article_description(&contents).await,
                slug,
                interest: generate_interest_data(&contents).await,
                analytics: generate_analytics_data(&contents).await,
            };
            metadata.push(data.clone());
            metadata::write_articles_metadata_file(&metadata);
            let presentation = tabled::Table::new(vec![AddArticlePresentation {
                title: data.title,
                from_path: path.to_str().unwrap_or("n/a").to_string(),
                to_path: copied_path.to_str().unwrap_or("n/a").to_string(),
            }]);
            print!("{}", presentation);
        },

        Some((delete_article_command::DELETE_COMMAND_NAME, matches)) => {
            let slug = delete_article_command::parse_matches(matches);
            let mut metadata = metadata::read_metadata_file();

            if !articles::article_published(&slug) {
                panic!("Article not previously added: {}", slug);
            }
            if !metadata::is_metadata_captured(&slug, &metadata) {
                panic!("Article metadata not previously captured: {}", slug)
            }

            let target_index = metadata.iter().position(|r| &r.slug == &slug).unwrap();
            metadata.swap_remove(target_index);
            match articles::rm_from(&slug) {
                Ok(_) => {
                    metadata::write_articles_metadata_file(&metadata);
                    print!("Success removing file");
                },
                Err(_) => {
                    panic!("Error removing articles file")
                },
            }
        },
        None => print!("No subcommand was used\n"),
        _ => print!("Unknown subcommand was used\n"),
    }
}
