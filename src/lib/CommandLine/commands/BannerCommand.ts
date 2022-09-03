import type { Command, TextHandlerResponse } from "../definitions"

const BannerCommand: Command = {
    name: "banner",
    description: "Banner!",
    optionDefinitions: [],
    handle: (_): TextHandlerResponse => ({
        text: ['https://media.giphy.com/media/3oKIPEfOl9zDW2aE6s/giphy.gif', "Type 'help' to see list of available commands."]
    })
}

export default BannerCommand
