use crate::metadata::article_metadata;
use crate::metadata::MetaDataManager;
use clap::{Arg, ArgAction, ArgMatches, Command};

pub fn create_command() -> Command {
    Command::new("list")
        .about("List all articles in the blog")
        .arg(
            Arg::new("category")
                .short('c')
                .help("article category")
                .action(ArgAction::Set)
                .value_parser(clap::value_parser!(article_metadata::Category)),
        )
}

pub fn handle_command_matches(matches: &ArgMatches) {
    let category = matches.get_one::<article_metadata::Category>("category");
    let manager = MetaDataManager::new();

    match category {
        Some(c) => {
            let articles = manager.articles();
            println!("Articles in category '{}':", c);
            for slug in articles.keys() {
                let article = articles.get(slug).unwrap();
                if article.interest.category == c.to_owned() {
                    println!("  {}", slug);
                }
            }
        }
        None => {
            let articles = manager.articles();
            println!("Articles:");
            for slug in articles.keys() {
                println!("  {}", slug);
            }
        }
    }
}
