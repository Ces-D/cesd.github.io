use crate::metadata::{Category, MetaDataManager};
use clap::{Arg, ArgAction, ArgMatches, Command};

// TODO: need a file that stores all the added articles metadata, for faster access, this should
// eventually just read the sitemap
// TODO: convert my graymatter structs to ts types -> ts-rs or typescript-definitions
// TODO: copy the target file to the articles directory in the frontend project with the graymatter
// attached at the top

pub fn create_command() -> Command {
    Command::new("article")
        .next_line_help(true)
        .about("Manage articles in the cesdia blog. Controls setting metadata for selected blog posts from wherever in the file system they are located.")
        .arg(
            Arg::new("target")
                .help("the target article's file location")
                .action(ArgAction::Set)
                .required(true)
                .value_parser(clap::value_parser!(std::path::PathBuf))
        )
}

pub fn handle_matches(matches: &ArgMatches) {
    let target_path = matches
        .get_one::<std::path::PathBuf>("target")
        .expect("No target path provided");
    let mut manager = MetaDataManager::new(None);
    let slug = manager.add_article(
        "Test article".to_string(),
        "description, description".to_string(),
        Category::BehindTheScenes,
        target_path.to_owned(),
    );

    println!(
        "Article command called with target: {}",
        target_path.display()
    );
    let added = manager.get_article_metadata(&slug);

    println!("Added article with slug: {}", added);
}
