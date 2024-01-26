use super::Slug;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;

#[derive(Debug, Clone, Copy, clap::ValueEnum, Serialize, Deserialize, PartialEq, Eq)]
pub enum Category {
    ComebackAndRead,
    Rust,
    Web,
    Other,
}

impl Default for Category {
    fn default() -> Self {
        Category::ComebackAndRead
    }
}

#[derive(Debug, Default, Serialize, Deserialize)]
pub struct InterestData {
    pub curated_links: Vec<String>,
    pub related_posts: HashSet<Slug>,
    pub category: Category,
}
