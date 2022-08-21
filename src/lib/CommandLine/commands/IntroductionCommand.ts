import type { Command, CommandHandlerParams } from "../definitions"

const IntroductionCommand: Command = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: (params: CommandHandlerParams) => ({ introduction: "My name is Cesar. Thats all" })
}

export default IntroductionCommand
