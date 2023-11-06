mod cesdia;
mod metadata;

fn main() {
    let cmd = clap::Command::new("cesdia-site")
        .bin_name("cesdia-site")
        .subcommand_required(true)
        .subcommand(cesdia::article::create_command());

    let matches = cmd.get_matches();
    match matches.subcommand() {
        Some(("article", article_matches)) => cesdia::article::handle_matches(article_matches),
        _ => panic!("Unknown subcommand"),
    }
}
