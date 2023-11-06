use std::collections::HashMap;
use std::fs::File;
use std::io::prelude::*;
use std::io::BufReader;
use std::path::Path;
use std::path::PathBuf;

mod article_metadata;

#[derive(Debug)]
pub enum Category {
    Programming,
    BehindTheScenes,
}

#[derive(Debug)]
pub enum PublicationFormat {
    Markdown,
    Text,
    Excel,
}

fn read_file_contents(file_path: &Path) -> String {
    let file = File::open(file_path).expect("File not found");
    let mut buf_reader = BufReader::new(file);
    let mut contents = String::new();
    buf_reader
        .read_to_string(&mut contents)
        .expect("Could not read file");
    contents
}

pub struct MetaDataManager {
    article_metadata: HashMap<article_metadata::Slug, article_metadata::GrayMatterData>,
}

impl MetaDataManager {
    pub fn new(
        metadata: Option<HashMap<article_metadata::Slug, article_metadata::GrayMatterData>>,
    ) -> MetaDataManager {
        MetaDataManager {
            article_metadata: metadata.or_else(|| Some(HashMap::new())).unwrap(),
        }
    }

    /// Add this articles metadata to the metadata manager
    pub fn add_article(
        &mut self,
        title: String,
        description: String,
        category: Category,
        file_path: PathBuf,
    ) -> article_metadata::Slug {
        let path = Path::new(&file_path);
        let content = read_file_contents(&path);
        let analytics = article_metadata::AnalyticsData::new(&content, &path);
        let interest = article_metadata::InterestData::new(category);

        let slug = article_metadata::Slug(title.clone());

        let metadata = article_metadata::GrayMatterData::new(
            title,
            description,
            slug.clone(),
            analytics,
            interest,
            chrono::Utc::now(),
        );

        if self.article_metadata.contains_key(&metadata.slug()) {
            panic!("Duplicate article slug found: {}", metadata.slug().0);
        }
        self.article_metadata.insert(metadata.slug(), metadata);

        slug
    }

    pub fn remove_article(&mut self, slug: article_metadata::Slug) {
        self.article_metadata.remove(&slug);
        self.article_metadata.values_mut().for_each(|article| {
            if article.interest.contains_related_post(&slug) {
                let mut updated_related = article.interest.read_related_posts();
                updated_related.remove(&slug);
                article.interest.set_related_posts(updated_related);
            }
        })
    }

    pub fn get_article_metadata(
        &self,
        slug: &article_metadata::Slug,
    ) -> &article_metadata::GrayMatterData {
        &self.article_metadata.get(slug).expect("Article not found")
    }
}
