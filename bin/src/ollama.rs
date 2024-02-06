use clap::ValueEnum;
use ollama_rs::generation::completion::{request::GenerationRequest, GenerationResponse};
use strum::IntoEnumIterator;

use crate::models::Category;

async fn mistral_generate(prompt: String) -> Result<GenerationResponse, String> {
    ollama_rs::Ollama::default()
        .generate(GenerationRequest::new(String::from("mistral:latest"), prompt))
        .await
}

pub async fn generate_article_description(content: &String) -> Option<String> {
    let prompt = format!(
        "Create a short summarization of the following articles content.\n\n Article: {}",
        content
    );
    match mistral_generate(prompt).await {
        Ok(completion) => Some(completion.response),
        Err(e) => {
            print!("Error generating abstract: {}", e);
            None
        },
    }
}

pub async fn generate_article_keywords(content: &String) -> Vec<String> {
    // FIXME: this needs further testing
    // ```json[1,2,3,4]`
    let prompt = format!("[INST] Identify up to 5 keywords that summarize the main points of the following article.\n\n Article: {} \n\n Follow up Instruction: Just generate a JSON array without explanation.", content);
    match mistral_generate(prompt).await {
        Ok(completion) => completion.response.split(",").map(|s| s.trim().to_string()).collect(),
        Err(e) => {
            print!("Error generating keywords: {}", e);
            vec![]
        },
    }
}

// FIXME: this needs further testing be
// Based on the given article, it appears that the "Data Types" category would be the most appropriate for the provided information on variables, constants, and data types in Rust.
pub async fn generate_article_category(content: &String) -> Category {
    let categories: Vec<Category> = Category::iter().collect();
    let prompt = format!("[INST] Select one of the following categories that identifies most with the following article.\n\nCategories: {:?}\n\n Article: {content}\n\n", categories, content=content);
    match mistral_generate(prompt).await {
        Ok(completion) => {
            print!("completion: {}", completion.response);
            Category::from_str(&completion.response, false).unwrap_or(Category::Other)
        },
        Err(e) => {
            print!("Error generating category: {}", e);
            Category::Other
        },
    }
}
