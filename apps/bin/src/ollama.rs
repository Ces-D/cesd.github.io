use ollama_rs::{
    self,
    generation::completion::{request::GenerationRequest, GenerationResponse},
};


async fn mistral_generate(prompt:String)->Result<GenerationResponse, String>{
    ollama_rs::Ollama::default().generate(GenerationRequest::new(String::from("mistral:latest"), prompt)).await
}

pub async fn generate_article_description(content: &String) -> Result<GenerationResponse, String> {
    let prompt =
        format!("Create an abstract for the content of the following article with a length between 150 - 200 characters: {}", content);
    mistral_generate(prompt).await
}

pub async fn generate_article_keywords(content:&String)->Result<GenerationResponse, String>{
   let prompt = format!("Identify the 5 keywords for the following article: {}. Return only the keywords separated by commas.", content);
   mistral_generate(prompt).await
}

