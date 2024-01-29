use std::io::Read;

use slugify_rs::slugify;

use crate::models::{AnalyticsData, InterestData, Metadata, Slug};

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
        std::fs::File::create(metdata_path).unwrap();
    }
    return metdata_path;
}

pub fn read_articles_metadata_file() -> Vec<Metadata> {
    let mut file = std::fs::File::open(articles_metadata()).unwrap();
    let mut contents = String::new();
    file.read_to_string(&mut contents).unwrap();
    let metadata: Vec<Metadata> = serde_json::from_str(&contents).unwrap();
    return metadata;
}

pub fn article_already_published(slug: &String) -> bool {
    let articles_dir = articles_dir();
    let article_path = articles_dir.join(format!("{}.md", slug));
    return article_path.exists();
}

pub fn read_article_file(path: &std::path::PathBuf) -> std::fs::File {
    if path.extension().unwrap() != "md" {
        panic!("File is not a markdown file");
    }
    std::fs::File::open(path).unwrap()
}

pub fn run() {
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
        Some((list_article_command::LIST_COMMAND_NAME, matches)) => {
            let metadata = read_articles_metadata_file();
            for article in metadata {
                // TODO: print out the article metadata
            }
        },
        Some((add_article_command::ADD_COMAND_NAME, matches)) => {
            let (path, title) = add_article_command::parse_matches(matches);
            let slug = slugify!(title.as_str());
            if article_already_published(&slug) {
                panic!("Article already exists with slug: {}", slug);
            }
            let mut file = read_article_file(&path);
            let mut contents = String::new();
            file.read_to_string(&mut contents).unwrap();
            // TODO: make this function async and run all of the ai stuff in the background
            Metadata {
                title,
                description: None,
                slug: Slug(slug),
                interest: InterestData {},
                analytics: AnalyticsData {},
            };
        },
        Some((delete_article_command::DELETE_COMMAND_NAME, matches)) => {
            let slug = delete_article_command::parse_matches(matches);
            todo!()
        },
        None => print!("No subcommand was used\n"),
        _ => print!("Unknow subcommand was used\n"),
    }
}
