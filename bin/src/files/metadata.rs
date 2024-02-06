use std::io::Write;

use crate::models::{Metadata, Slug};

use crate::files::constants::articles_metadata;

pub fn read_metadata_file() -> Vec<Metadata> {
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

pub fn is_metadata_captured(slug: &Slug, metadata: &Vec<Metadata>) -> bool {
    metadata.iter().any(|m| m.slug == slug.clone())
}
