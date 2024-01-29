pub const LIST_COMMAND_NAME: &str = "list";

pub fn command() -> clap::Command {
    clap::Command::new(LIST_COMMAND_NAME).about("List the articles published on the website")
}
