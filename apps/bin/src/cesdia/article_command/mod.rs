use clap::{ArgMatches, Command};
mod add_command;

pub fn create_command() -> Command {
    Command::new("article")
        .next_line_help(true)
        .about("Manage articles in the cesdia website. Controls setting metadata for selected blog posts from wherever in the file susare located.")
        .subcommand_required(true)
        .subcommand(add_command::create_command())
}

pub fn handle_command_matches(matches: &ArgMatches) {
    match matches.subcommand() {
        Some(("add", add_matches)) => add_command::handle_command_matches(add_matches),
        _ => panic!("Unknown article subcommmand"),
    }
}
