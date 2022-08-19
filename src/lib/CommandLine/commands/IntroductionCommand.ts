import type { Command, CommandHandlerParams } from "../definitions"

class IntroductionCommand implements Command {
    public name = "intro"
    public description = "Hi, Hello, How are you!"
    public optionDefinitions = []
    public handle = (params: CommandHandlerParams) => ({ introduction: "My name is Cesar. Thats all" })
}

export default IntroductionCommand