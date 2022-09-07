import type { Command, TextHandlerResponse } from "../definitions"

export type IntroductionCommand = Command<TextHandlerResponse>
const IntroductionCommand: IntroductionCommand = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: (_) => ({ text: ["My name is Cesar. Thats all"] })
}

export default IntroductionCommand
