use std::path::PathBuf;

use clap::Arg;

pub const ADD_COMAND_NAME: &str = "add";
const ADD_PATH_ARG_NAME: &str = "path";
const ADD_TITLE_ARG_NAME: &str = "title";

pub fn command() -> clap::Command {
    clap::Command::new(ADD_COMAND_NAME)
        .about("Add a new unique article to the website")
        .arg_required_else_help(true)
        .args([
            Arg::new(ADD_PATH_ARG_NAME)
                .help("Path to the markdown file")
                .long_help("The path to the file can be either relative to the `pwd` or absolute")
                .value_parser(clap::builder::NonEmptyStringValueParser::new())
                .required(true),
            Arg::new(ADD_TITLE_ARG_NAME)
                .help("Title of the article")
                .long_help("The title of the article")
                .value_parser(clap::builder::NonEmptyStringValueParser::new())
                .required(true),
        ])
}

pub fn parse_matches(matches: &clap::ArgMatches) -> (PathBuf, String) {
    let path_arg: &String = matches.get_one(ADD_PATH_ARG_NAME).unwrap();
    let title_arg: &String = matches.get_one(ADD_TITLE_ARG_NAME).unwrap();
    let pwd = std::env::current_dir().unwrap();

    (pwd.join(path_arg), title_arg.to_string())
}
