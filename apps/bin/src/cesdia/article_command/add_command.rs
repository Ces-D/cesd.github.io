use clap::{Arg, ArgAction, ArgMatches, Command};

use crate::metadata::{Category, MetaDataManager};

pub fn create_command() -> Command {
    Command::new("add")
        .about("Add a new article to the blog")
        .arg(
            Arg::new("target")
                .help("the target article files location")
                .action(ArgAction::Set)
                .required(true)
                .value_parser(clap::value_parser!(std::path::PathBuf)),
        )
        .arg(
            Arg::new("title")
                .help("title for this article")
                .required(true)
                .action(ArgAction::Set)
                .value_parser(clap::value_parser!(String)),
        )
        .arg(
            Arg::new("description")
                .help("description of the article")
                .action(ArgAction::Set)
                .default_value("")
                .value_parser(clap::value_parser!(String)),
        )
        .arg(
            Arg::new("category")
                .help("article category")
                .action(ArgAction::Set)
                .default_value("behind-the-scenes")
                .value_parser(clap::value_parser!(Category)),
        )
}

pub fn handle_command_matches(matches: &ArgMatches) {
    let target = matches
        .get_one::<std::path::PathBuf>("target")
        .expect("target file is required");
    let title = matches
        .get_one::<String>("title")
        .expect("title of article is required");
    let description = matches
        .get_one::<String>("description")
        .expect("description should have a default value");
    let category = matches
        .get_one::<Category>("category")
        .expect("category should have a default value");

    let mut manager = MetaDataManager::new(None);
    let slug = manager.add_article(
        title.to_string(),
        description.to_owned(),
        category.to_owned(),
        target.to_owned(),
    );

    let added = manager.get_article_metadata(&slug);

    println!("Added article with slug:\n\n {}", added);
}
