import type { Command, ErrorHandlerResponse, TextHandlerResponse } from "../definitions"
import {ParserEventCode} from '@/CommandLine/definitions'

export type IntroductionCommand = Command<TextHandlerResponse | ErrorHandlerResponse>

const IntroductionCommand: IntroductionCommand = {
    name: "intro",
    description: "Hi, Hello, How are you!",
    optionDefinitions: [],
    handle: ({callStack}) => {
    let response:TextHandlerResponse | ErrorHandlerResponse

    if (!!callStack){
      response = {error:ParserEventCode[callStack[0]]}
    }else {
      response = { text: ["My name is Cesar. Thats all"] }
    }
    return response
  }
}

export default IntroductionCommand
