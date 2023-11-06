use chrono::{DateTime, Utc};
use estimated_read_time;
use keyphrases::KeyPhraseExtractor;
use std::path::Path;
use std::{collections::HashSet, fmt::Display};

use super::{Category, PublicationFormat};

#[derive(Hash, Eq, PartialEq, Clone)]
pub struct Slug(pub String);

pub struct GrayMatterData {
    title: String,
    pub description: String,
    slug: Slug,
    pub analytics: AnalyticsData,
    pub interest: InterestData,

    published: DateTime<Utc>,
}

impl GrayMatterData {
    pub fn new(
        title: String,
        description: String,
        slug: Slug,
        analytics: AnalyticsData,
        interest: InterestData,
        published: DateTime<Utc>,
    ) -> Self {
        Self {
            title,
            description,
            slug,
            analytics,
            interest,
            published,
        }
    }

    pub fn slug(&self) -> Slug {
        self.slug.to_owned()
    }
}

impl Display for GrayMatterData {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let mut keywords = String::new();
        for keyword in &self.analytics.keywords {
            keywords.push_str(&format!("{}, ", keyword));
        }

        let mut related_posts = String::new();
        for post in &self.interest.related_posts {
            related_posts.push_str(&format!("{}, ", post.0));
        }

        write!(
            f,
            "Title: {}\nDescription: {}\nSlug: {}\nLength in words: {}\nReading time in minutes: {}\nKeywords: {}\nPublication format: {:?}\nCurated links: {}\nRelated posts: {}\nCategory: {:?}\nPublished: {}",
            self.title,
            self.description,
            self.slug.0,
            self.analytics.length_in_words,
            self.analytics.reading_time_in_minutes,
            keywords,
            self.analytics.publication_format,
            self.interest.curated_links.join(", "),
            related_posts,
            self.interest.category,
            self.published
        )
    }
}

pub struct AnalyticsData {
    length_in_words: u64,
    reading_time_in_minutes: u64,
    keywords: Vec<String>,
    publication_format: PublicationFormat,
}

impl AnalyticsData {
    pub fn new(content: &String, path: &Path) -> AnalyticsData {
        let reading_options = estimated_read_time::Options::new();
        let reading_time = estimated_read_time::text(content, &reading_options);

        let phrase_extractor = KeyPhraseExtractor::new(content, 10);
        let keywords: Vec<String> = phrase_extractor
            .get_keywords()
            .iter()
            .map(|x| x.1.clone())
            .collect();

        let extension = path.extension().expect("Unable to get file extension");

        let publication_format = match extension.to_str().unwrap() {
            "md" => PublicationFormat::Markdown,
            "txt" => PublicationFormat::Text,
            "xlsx" => PublicationFormat::Excel,
            _ => panic!("Unsupported file format"),
        };

        AnalyticsData {
            length_in_words: reading_time.word_count(),
            reading_time_in_minutes: reading_time.seconds() / 60,
            keywords,
            publication_format,
        }
    }
}

pub struct InterestData {
    pub curated_links: Vec<String>,
    related_posts: HashSet<Slug>,
    pub category: Category,
}

impl InterestData {
    pub fn new(category: Category) -> Self {
        Self {
            curated_links: Vec::new(),
            related_posts: HashSet::new(),
            category,
        }
    }

    pub fn set_related_posts(&mut self, related_posts: HashSet<Slug>) {
        self.related_posts = related_posts;
    }

    pub fn read_related_posts(&self) -> HashSet<Slug> {
        self.related_posts.to_owned()
    }

    pub fn contains_related_post(&self, slug: &Slug) -> bool {
        self.related_posts.contains(slug)
    }
}
