use super::constants::{application_article_directory, application_article_metadata_file};
use crate::metadata::{Metadata, Slug};
use serde_json;

pub fn metadata_file() -> Result<std::collections::HashMap<Slug, Metadata>, std::io::Error> {
    let metadata_file = std::fs::read_to_string(application_article_metadata_file())?;
    let metadata =
        serde_json::from_str::<std::collections::HashMap<Slug, Metadata>>(metadata_file.as_str())?;
    Ok(metadata)
}

pub fn articles_in_directory() -> Result<Vec<Slug>, std::io::Error> {
    let article_files = std::fs::read_dir(application_article_directory())?;
    let mut slug: Vec<Slug> = Vec::new();

    for file in article_files {
        let file = file.unwrap();
        let metadata = file.metadata().unwrap();
        if metadata.is_dir() {
            panic!("Article is a directory");
        }
        if metadata.is_file() {
            let file_name = file.file_name().into_string().unwrap();
            let file_name = std::path::Path::file_stem(std::path::Path::new(&file_name))
                .expect("Unable to extract file stem")
                .to_str()
                .unwrap();

            slug.push(Slug::new(&file_name.to_string()));
        }
    }

    Ok(slug)
}

pub fn article(slug: &Slug) -> Result<std::path::PathBuf, std::io::Error> {
    let article_directory = application_article_directory();
    let article_path = article_directory.join(format!("{}.md", slug));
    if article_path.exists() {
        Ok(article_path)
    } else {
        Err(std::io::Error::new(std::io::ErrorKind::NotFound, "Article not found"))
    }
}
