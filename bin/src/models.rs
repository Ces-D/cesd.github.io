use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use tabled::Tabled;

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq, Hash)]
pub struct Slug(pub String);

#[derive(
    Serialize, Deserialize, Debug, Clone, Eq, PartialEq, clap::ValueEnum, strum_macros::Display,
)]
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
    pub keywords: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq)]
pub struct AnalyticsData {
    pub length_in_words: u64,
    pub reading_time_in_minutes: u64,
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

#[derive(Tabled)]
pub struct MetadataSimple {
    pub title: String,
    pub slug: String,
    pub published_on: String,
    pub updated_on: String,
    category: String,
}

impl From<&Metadata> for MetadataSimple {
    fn from(metadata: &Metadata) -> Self {
        MetadataSimple {
            title: metadata.title.clone(),
            slug: metadata.slug.0.clone(),
            published_on: metadata.analytics.published_on.naive_local().to_string(),
            updated_on: metadata.analytics.updated_on.naive_local().to_string(),
            category: metadata.interest.category.to_string(),
        }
    }
}

#[derive(Tabled)]
pub struct AddArticlePresentation {
    pub title: String,
    pub from_path: String,
    pub to_path: String,
}
