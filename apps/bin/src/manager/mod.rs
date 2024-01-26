use std::path::Path;

use crate::metadata::{Metadata, Slug};

mod constants;
mod reader;
mod writer;

#[derive(Debug, Clone)]
pub enum SyncError {
    MetadataNotFound(Slug),
    ProcessError,
}

impl std::fmt::Display for SyncError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            SyncError::MetadataNotFound(slug) => write!(f, "Metadata not found for {}", slug),
            SyncError::ProcessError => write!(f, "Error processing request"),
        }
    }
}
impl std::error::Error for SyncError {}

pub struct Manager {
    metadata: std::collections::HashMap<Slug, Metadata>,
}

impl Manager {
    pub fn new() -> Result<Manager, SyncError> {
        let articles = reader::articles_in_directory().map_err(|_| SyncError::ProcessError)?;
        let metadata = reader::metadata_file().map_err(|_| SyncError::ProcessError)?;
        for article in articles {
            if !metadata.contains_key(&article) {
                return Err(SyncError::MetadataNotFound(article));
            }
        }

        Ok(Manager { metadata })
    }

    /// Creates a new article in the app and adds it the metadata
    /// Copies the source file to the article directory, analyzes the article and adds the metadata to the metadata file
    pub fn create_article(
        &self,
        metadata: Metadata,
        source: std::path::PathBuf,
    ) -> Result<(), SyncError> {
        self.metadata.insert(metadata.slug(), metadata);
        writer::write_metadata(&self.metadata).map_err(|_| SyncError::ProcessError)?;
        let source_contents =
            String::from_utf8(std::fs::read(source).map_err(|_| SyncError::ProcessError)?)
                .map_err(|_| SyncError::ProcessError)?;
        writer::add_article(metadata.slug(), source_contents)
            .map_err(|_| SyncError::ProcessError)?;
        Ok(())
    }

    /// Removes the metadata and the article from the app
    pub fn remove_article(&self, slug: Slug) -> Result<(), SyncError> {
        self.metadata.remove(&slug);
        writer::write_metadata(&self.metadata).map_err(|_| SyncError::ProcessError)?;
        let dir = std::fs::read_dir(constants::application_article_directory()).unwrap();
        for file in dir {
            let Some(file_name) = Path::new(&file.unwrap().file_name()).file_stem();
            // TODO: finish, compare the file_name to the slug and if match delete
        }

        Ok(())
    }

    /// Overwrites the original article if source is provided. This is done in the case that the article text is updated. The metadata is always assumed to be updated
    pub fn update_article_metadata(&self, metadata: Metadata, source: Option<std::path::PathBuf>) {
        // TODO
    }
}
