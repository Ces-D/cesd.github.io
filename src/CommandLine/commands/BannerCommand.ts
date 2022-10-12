import type { Command, ErrorHandlerResponse, TextHandlerResponse } from "../definitions"
import { ParserEventCode } from '@/CommandLine/definitions'

export type BannerCommand = Command<TextHandlerResponse | ErrorHandlerResponse>

const BannerCommand: BannerCommand = {
  name: "banner",
  description: "Banner!",
  optionDefinitions: [],
  handle: ({ callStack }) => {
    let response: TextHandlerResponse | ErrorHandlerResponse

    if (!!callStack) {
      response = { error: ParserEventCode[callStack[0]] }
    } else {
      response = { text: ['https://media.giphy.com/media/3oKIPEfOl9zDW2aE6s/giphy.gif', "Type 'help' to see list of available commands."] }
    }
    return response
  }
}

export default BannerCommand
