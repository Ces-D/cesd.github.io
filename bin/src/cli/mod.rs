use std::io::Write;

use slugify_rs::slugify;
use tabled;

use crate::models::{
    AddArticlePresentation, AnalyticsData, InterestData, Metadata, MetadataSimple, Slug,
};
use crate::ollama::{
    generate_article_category, generate_article_description, generate_article_keywords,
};

mod add_article_command;
mod delete_article_command;
mod list_article_command;

pub fn articles_dir() -> std::path::PathBuf {
    let dir = "projects/cesdia.github.io/www/src/articles";
    let document_dir = dirs::document_dir().unwrap();
    let articles_dir = document_dir.join(dir);
    if !articles_dir.exists() {
        std::fs::create_dir(&articles_dir)
            .expect(format!("Failed to create articles directory at: {}", dir).as_str());
    }
    return articles_dir;
}

pub fn articles_metadata() -> std::path::PathBuf {
    let articles_dir = articles_dir();
    let metdata_path = articles_dir.join("articlesMetadata.json");
    if !metdata_path.is_file() {
        std::fs::File::create(&metdata_path).unwrap();
    }
    return metdata_path;
}

pub fn copy_article_to_articles_dir(
    from: &std::path::PathBuf,
    slug: &String,
) -> std::path::PathBuf {
    let to = articles_dir().join(format!("{}.md", slug));
    std::fs::copy(from, to.clone()).unwrap();
    to
}

pub fn read_articles_metadata_file() -> Vec<Metadata> {
    let contents = std::fs::read_to_string(articles_metadata()).unwrap();
    let metadata: Vec<Metadata> = serde_json::from_str(&contents).unwrap();
    return metadata;
}

pub fn write_articles_metadata_file(metadata: &Vec<Metadata>) {
    let mut file =
        std::fs::OpenOptions::new().write(true).create(true).open(articles_metadata()).unwrap();
    let contents = serde_json::to_string(metadata).unwrap();
    file.write_all(contents.as_bytes()).unwrap();
}

pub fn article_already_published(slug: &Slug, metadata: &Vec<Metadata>) -> bool {
    let article_path = articles_dir().join(format!("{}.md", slug.0));
    return article_path.exists() && metadata.iter().any(|m| m.slug == slug.clone());
}

pub fn read_article_file(path: &std::path::PathBuf) -> String {
    if path.extension().unwrap() != "md" {
        panic!("File is not a markdown file");
    }
    std::fs::read_to_string(path).unwrap()
}

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
            let metadata = read_articles_metadata_file();
            let metadata = metadata.iter().map(|m| MetadataSimple::from(m));
            let presentation = tabled::Table::new(metadata);
            print!("{}", presentation);
        },

        Some((add_article_command::ADD_COMAND_NAME, matches)) => {
            let (path, title) = add_article_command::parse_matches(matches);
            let slug = Slug(slugify!(title.as_str()));
            let mut metadata = read_articles_metadata_file();
            if article_already_published(&slug, &metadata) {
                panic!("Article already exists with slug: {}", slug.0);
            }
            let copied_path = copy_article_to_articles_dir(&path, &slug.0);
            let contents = read_article_file(&copied_path);
            let data = Metadata {
                title,
                description: generate_article_description(&contents).await,
                slug,
                interest: generate_interest_data(&contents).await,
                analytics: generate_analytics_data(&contents).await,
            };
            metadata.push(data.clone());
            write_articles_metadata_file(&metadata);
            let presentation = tabled::Table::new(vec![AddArticlePresentation {
                title: data.title,
                from_path: path.to_str().unwrap_or("n/a").to_string(),
                to_path: copied_path.to_str().unwrap_or("n/a").to_string(),
            }]);
            print!("{}", presentation);
        },

        Some((delete_article_command::DELETE_COMMAND_NAME, matches)) => {
            let slug = delete_article_command::parse_matches(matches);
            todo!()
        },
        None => print!("No subcommand was used\n"),
        _ => print!("Unknow subcommand was used\n"),
    }
}
