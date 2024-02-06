use crate::models::Slug;

use crate::files::constants::articles_dir;

pub fn mv_to(from: &std::path::PathBuf, slug: &Slug) -> std::path::PathBuf {
    let to = articles_dir().join(format!("{}.md", slug));
    std::fs::copy(from, to.clone()).unwrap();
    to
}

pub fn rm_from(from: &Slug) -> std::io::Result<()> {
    let target = articles_dir().join(format!("{}.md", from));
    std::fs::remove_file(target)
}

pub fn article_published(slug: &Slug) -> bool {
    let article_path = articles_dir().join(format!("{}.md", slug));
    article_path.exists()
}

pub fn is_accepted_format(path: &std::path::PathBuf) -> bool {
    path.extension().unwrap() == "md"
}

pub fn read_article_file(path: &std::path::PathBuf) -> String {
    std::fs::read_to_string(path).unwrap()
}
