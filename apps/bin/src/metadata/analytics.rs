use crate::ollama;
use serde::{Deserialize, Serialize};

#[derive(Default, Serialize, Deserialize, Debug)]
pub struct AnalyticsData {
    length_in_words: u64,
    reading_time_in_minutes: u64,
    keywords: Vec<String>,
}

impl AnalyticsData {
    pub async fn new_async(content: &String) -> AnalyticsData {
        let reading_time =
            estimated_read_time::text(content, &estimated_read_time::Options::new().word_length(5));
        let res = ollama::generate_article_keywords(content).await;
        let keywords =
            res.map_or_else(|_| vec![], |v| v.response.split(",").map(|v| v.to_string()).collect());

        AnalyticsData {
            length_in_words: reading_time.word_count(),
            reading_time_in_minutes: reading_time.seconds() / 60,
            keywords,
        }
    }
}
