use dirs;

pub fn application_article_directory() -> std::path::PathBuf {
    let documents_dir = dirs::document_dir().expect("Could not get documents directory");
    documents_dir.join("/projects/cesdia.github.io/apps/www/articles")
}

pub fn application_article_metadata_file() -> std::path::PathBuf {
    let application_article_directory = application_article_directory();
    application_article_directory.join("articles.json")
}
