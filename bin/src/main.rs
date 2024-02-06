mod cli;
mod files;
mod models;
mod ollama;

#[tokio::main]
async fn main() {
    cli::run().await;
}
