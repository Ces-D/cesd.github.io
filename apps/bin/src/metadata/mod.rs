use serde::{Deserialize, Serialize};
use slugify_rs::slugify;

pub mod analytics;
pub mod interest;

#[derive(Serialize, Deserialize, Debug, Clone, Eq, PartialEq, Hash)]
pub struct Slug(String);
impl Slug {
    pub fn new(s: &str) -> Slug {
        Slug(slugify!(s, randomness = true, randomness_length = 2).to_owned())
    }
}

impl std::fmt::Display for Slug {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}", &self.0)
    }
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Metadata {
    title: String,
    pub description: Option<String>,
    slug: Slug,
    pub analytics: analytics::AnalyticsData,
    pub interest: interest::InterestData,
}

impl Metadata {
    pub fn new(title: String) -> Metadata {
        Metadata {
            title,
            description: None,
            slug: Slug::new(&title),
            analytics: analytics::AnalyticsData::default(),
            interest: interest::InterestData::default(),
        }
    }

    pub fn slug(&self) -> Slug {
        self.slug.clone()
    }
}
