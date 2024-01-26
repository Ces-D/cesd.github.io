use crate::metadata::article_metadata::{parse_slug, Slug};
use crate::metadata::MetaDataManager;
use clap::{Arg, ArgAction, ArgMatches, Command};

pub fn create_command() -> Command {
    Command::new("remove")
        .about("Remove an article from the blog")
        .arg(
            Arg::new("slug")
                .help("the slug of the target article")
                .action(ArgAction::Set)
                .required(true)
                .value_parser(clap::builder::ValueParser::new(parse_slug)),
        )
}

pub fn handle_command_matches(matches: &ArgMatches) {
    let slug = matches
        .get_one::<Slug>("slug")
        .expect("slug of article is required");

    let mut manager = MetaDataManager::new();
    let removed_articled = manager.remove_article(slug.to_owned());
    match removed_articled {
        Some(article) => {
            manager.save();
            println!("Removed article:\n");
            println!("title: {}", article.title());
            println!("slug: {}", article.slug());
        }
        None => {
            println!("Article not found");
        }
    }
}
