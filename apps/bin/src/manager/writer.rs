use super::constants;
use crate::metadata::{Metadata, Slug};

use serde_json;
use std::io::Write;

pub fn add_article(slug: Slug, content: String) -> Result<(), std::io::Error> {
    let article_directory = constants::application_article_directory();
    let article_path = article_directory.join(format!("{}.md", slug));
    let mut file = std::fs::File::create(article_path)?;
    file.write_all(content.as_bytes())?;
    Ok(())
}

pub fn remove_article(path: std::path::PathBuf) -> Result<(), std::io::Error> {
    let article_directory = constants::application_article_directory();
    let article_path = article_directory.join(path);
    std::fs::remove_file(article_path)?;
    Ok(())
}

pub fn write_metadata(
    metadata: &std::collections::HashMap<Slug, Metadata>,
) -> Result<(), std::io::Error> {
    let metadata_file = constants::application_article_metadata_file();
    let metadata = serde_json::to_string_pretty(metadata)?;
    std::fs::write(metadata_file, metadata)?;
    Ok(())
}
