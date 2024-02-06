use std::io::Write;

pub fn articles_dir() -> std::path::PathBuf {
    let dir = "projects/cesd.github.io/www/src/articles";
    let document_dir = dirs::document_dir().unwrap();
    let articles_dir = document_dir.join(dir);
    if !articles_dir.exists() {
        std::fs::create_dir(&articles_dir).expect(
            format!("Failed to create articles directory at: {}", articles_dir.to_str().unwrap())
                .as_str(),
        );
    }
    return articles_dir;
}

pub fn articles_metadata() -> std::path::PathBuf {
    let articles_dir = articles_dir();
    let metdata_path = articles_dir.join("articlesMetadata.json");
    if !metdata_path.is_file() {
        let mut file = std::fs::File::create(&metdata_path).unwrap();
        file.write_fmt(format_args!("{}", "[]")).unwrap();
    }
    return metdata_path;
}
