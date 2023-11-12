use std::collections::HashMap;
use std::fs::OpenOptions;

use super::article_metadata;

const CACHE_FILE_NAME: &str = "metadata_cache.toml";

pub struct Cache {
    article_metadata: HashMap<article_metadata::Slug, article_metadata::GrayMatterData>,
}

impl Cache {
    pub fn new() -> Cache {
        Cache {
            article_metadata: HashMap::new(),
        }
    }

    pub fn write(&self) {}
    pub fn read(&self) -> Result(Cache, dyn std::error::Error) {
        let file = OpenOptions::new().read(true).open(CACHE_FILE_NAME);
        
    }
}
