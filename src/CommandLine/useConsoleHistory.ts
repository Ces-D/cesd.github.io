import create from "zustand"
import produce from "immer"
import CommandLineParser from "./CommandLineParser";
import type { Command, CommandHandlerParams, ErrorHandlerResponse } from "./definitions";
import { ParserEventCode } from "./definitions";
import BannerCommand from "./commands/BannerCommand";

const MAX_HISTORY_LENGTH = 20

interface ConsoleHistoryState {
  commandHistory: { name: Command<unknown>['name'] | 'error', handle: Command<unknown>['handle'], handlerParams: CommandHandlerParams, input: string, id: string }[];
  enterCommand: (input: string) => void;
}


const useConsoleHistory = create<ConsoleHistoryState>((set) => ({
  commandHistory: [{ name: BannerCommand.name, handle: BannerCommand.handle, handlerParams: { options: [] }, input: BannerCommand.name, id: '1' }],

  enterCommand: (input) => set(produce<ConsoleHistoryState>(state => {
    if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.shift();

    const parsedInput = new CommandLineParser(input)

    if (CommandLineParser.isSuccessfulParse(parsedInput) && !!parsedInput.command) {
      state.commandHistory.push(
        {
          name: parsedInput.command.name, handle: parsedInput.command.handle,
          handlerParams: { options: parsedInput.options }, input, id: crypto.randomUUID()
        }
      )
    }
    else if (!CommandLineParser.isSuccessfulParse(parsedInput) && !!parsedInput.command) {
      state.commandHistory.push({
        name: parsedInput.command.name, handle: parsedInput.command.handle,
        handlerParams: { options: parsedInput.options, callStack: parsedInput.callStack }, input, id: crypto.randomUUID() // This is still an error, so we pass callStack
      })
    }
    else {
      state.commandHistory.push({
        name: 'error', handle: (_): ErrorHandlerResponse => ({ error: ParserEventCode[parsedInput.callStack[0]] }),
        handlerParams: { options: [], callStack: parsedInput.callStack }, input, id: crypto.randomUUID()
      })
    }
  })),

})
)

export { useConsoleHistory }
