import type { Command, TextHandlerResponse } from "../definitions"

export type BannerCommand = Command<TextHandlerResponse>

const BannerCommand: BannerCommand = {
    name: "banner",
    description: "Banner!",
    optionDefinitions: [],
    handle: (_) => ({
        text: ['https://media.giphy.com/media/3oKIPEfOl9zDW2aE6s/giphy.gif', "Type 'help' to see list of available commands."]
    })
}

export default BannerCommand
