use crate::models;
use clap::Arg;
use slugify_rs::slugify;

pub const DELETE_COMMAND_NAME: &str = "delete";
pub const DELETE_SLUG_ARG_NAME: &str = "slug";

pub fn command() -> clap::Command {
    clap::Command::new(DELETE_COMMAND_NAME)
        .about("Delete an article from the website")
        .arg_required_else_help(true)
        .args([Arg::new(DELETE_SLUG_ARG_NAME)
            .help("Slug of the article to delete")
            .long_help("The slug of the article to delete")
            .value_parser(clap::builder::NonEmptyStringValueParser::new())
            .required(true)])
}

pub fn parse_matches(matches: &clap::ArgMatches) -> models::Slug {
    let slug_arg: &String = matches.get_one(DELETE_SLUG_ARG_NAME).unwrap();
    models::Slug(slugify_rs::slugify!(slug_arg))
}
