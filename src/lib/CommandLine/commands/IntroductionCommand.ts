import type { Command, TextHandlerResponse } from "../definitions"

const IntroductionCommand: Command = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: (_): TextHandlerResponse => ({ text: ["My name is Cesar. Thats all"] })
}

export default IntroductionCommand
