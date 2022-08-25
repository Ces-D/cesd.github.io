import type { Command, HandlerTextResponse } from "../definitions"

const IntroductionCommand: Command = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: (params): HandlerTextResponse => ({ isError: false, response: [{ labels: [], text: "My name is Cesar. Thats all" }] })
}

export default IntroductionCommand
