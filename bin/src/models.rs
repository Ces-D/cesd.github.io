use serde::{Deserialize, Serialize};
use std::collections::HashSet;

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq, Hash)]
pub struct Slug(pub String);

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq, clap::ValueEnum)]
pub enum Category {
    ComebackAndRead,
    Rust,
    Web,
    Other,
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct InterestData {
    pub curated_links: Vec<String>,
    pub related_posts: HashSet<Slug>,
    pub category: Category,
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct AnalyticsData {
    pub length_in_words: u64,
    pub reading_time_in_minutes: u64,
    pub keywords: Vec<String>,
    pub published_on: chrono::DateTime<chrono::Utc>,
    pub updated_on: chrono::DateTime<chrono::Utc>,
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct Metadata {
    pub title: String,
    pub description: Option<String>,
    pub slug: Slug,
    pub interest: InterestData,
    pub analytics: AnalyticsData,
}
