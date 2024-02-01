use ollama_rs::generation::completion::{request::GenerationRequest, GenerationResponse};

use clap::ValueEnum;

use crate::models::Category;


async fn mistral_generate(prompt:String)->Result<GenerationResponse, String>{
    ollama_rs::Ollama::default().generate(GenerationRequest::new(String::from("mistral:latest"), prompt)).await
}

pub async fn generate_article_description(content: &String) -> Option<String> {
    let prompt =
        format!("Create an abstract for the content of the following article with a length between 150 - 200 characters: {}", content);
    match mistral_generate(prompt).await {
        Ok(completion) => { Some(completion.response) }
        Err(e) => {
            print!("Error generating abstract: {}", e);
            None
        }
    }
}

pub async fn generate_article_keywords(content:&String)->Vec<String>{
   let prompt = format!("Identify the 5 keywords for the following article: {}. Return only the keywords separated by commas.", content);
  match  mistral_generate(prompt).await {
      Ok(completion) => {
        completion.response.split(",").map(|s| s.trim().to_string()).collect()
      },
      Err(e)=>{
          print!("Error generating keywords: {}", e);
         vec![] 
      }
  }
}

pub async fn generate_article_category(content:&String) -> Category {
   let prompt = format!("Categorize the content of the following article: {}. Select only one of the following categories: {}",content, "string"); 
   match mistral_generate(prompt).await {
       Ok(completion) => {
              Category::from_str(&completion.response,false).unwrap_or(Category::Other)
         },
         Err(e)=>{
             print!("Error generating category: {}", e);
             Category::Other
       }
   }
}

