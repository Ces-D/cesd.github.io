import type { Command, HandlerGraphicResponse } from "../definitions"

const BannerCommand: Command = {
    name: "banner",
    description: "Banner!",
    optionDefinitions: [],
    handle: (params): HandlerGraphicResponse => ({
        isError: false,
        response: { path: 'https://media.giphy.com/media/3oKIPEfOl9zDW2aE6s/giphy.gif', text: "Type 'help' to see list of available commands." }
    })
}

export default BannerCommand
