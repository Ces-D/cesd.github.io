import type { CommandHandlerParams, ICommand } from "./definitions";

const IntroductionCommand: ICommand = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: (params: CommandHandlerParams) => { }
}

const BlogPostsCommand: ICommand = {
    name: "posts",
    description: "Join to learn what I have learned!",
    optionDefinitions: [{ name: "order", description: "new to old or vice versa", defaultValue: "newest", isRequired: false }, { name: "num", description: "how many", defaultValue: 4, isRequired: false }],
    handle: (params: CommandHandlerParams) => { }
}

const BleepBloopCommand: ICommand = {
    name: "bleep-bloop",
    description: "Bleep Bloop!",
    optionDefinitions: [],
    handle: (params: CommandHandlerParams) => { }
}

const HelpCommand: ICommand = {
    name: "help",
    description: "View all of the features!",
    optionDefinitions: [],
    handle: (params: CommandHandlerParams) => { }
}

// TODO: These commands need an interceptor that adds the --help option

export { IntroductionCommand, BlogPostsCommand, BleepBloopCommand, HelpCommand }