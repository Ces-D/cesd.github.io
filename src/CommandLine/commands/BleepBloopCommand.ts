import type { Command, ErrorHandlerResponse, TextHandlerResponse } from "../definitions"
import { ParserEventCode } from '@/CommandLine/definitions'

type BleepBloopCommand = Command<TextHandlerResponse | ErrorHandlerResponse>

const BleepBloopCommand: BleepBloopCommand = {
  name: "bleep-bloop",
  description: "Bleep Bloop!",
  optionDefinitions: [],
  handle: ({ callStack }) => {
    let response: TextHandlerResponse | ErrorHandlerResponse

    if (!!callStack) {
      response = { error: ParserEventCode[callStack[0]] }
    } else {
      response = { text: ['bleep bloop', "I'm a robot"] }
    }

    return response
  }
}

export default BleepBloopCommand
