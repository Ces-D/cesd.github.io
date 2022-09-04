import create from "zustand"
import produce from "immer"
import { CommandError } from "@/utils/errors";
import CommandFactory from "./CommandFactory";
import CommandLineParser from "./CommandLineParser";
import type { Command, CommandHandlerParams, ErrorHandlerResponse } from "./definitions";
import BannerCommand from "./commands/BannerCommand";

const COMMANDS = CommandFactory.generateCommands()
const MAX_HISTORY_LENGTH = 20

interface ConsoleHistoryState {
  commandHistory: (Pick<Command, "name" | "handle"> & { handlerParams: CommandHandlerParams, input: string, id: string })[];
  enterCommand: (input: string) => void;
}


const useConsoleHistory = create<ConsoleHistoryState>((set) => ({
  commandHistory: [{ name: BannerCommand.name, handle: BannerCommand.handle, handlerParams: { options: [] }, input: BannerCommand.name, id: '1' }],

  enterCommand: (input) => set(produce<ConsoleHistoryState>(state => {
    if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.shift();

    try {
      const parsedInput = new CommandLineParser(input, COMMANDS)
      state.commandHistory.push(
        {
          name: parsedInput.Command().name, handle: parsedInput.Command().handle,
          handlerParams: { options: parsedInput.Options() }, input, id: crypto.randomUUID()
        }
      )
    } catch (err) {
      if (err instanceof CommandError) {
        const errObject = err.toObject()
        state.commandHistory.push(
          {
            name: errObject.type, handle: (_): ErrorHandlerResponse => ({ error: errObject.message }),
            handlerParams: { options: [] }, input, id: crypto.randomUUID()
          }
        )
      }
      else {
        state.commandHistory.push({
          name: 'UNKNOWN ERROR', handle: (_): ErrorHandlerResponse => ({ error: JSON.stringify(err) }),
          handlerParams: { options: [] }, input, id: crypto.randomUUID()
        })
      }
    }
  }))

}))

export { useConsoleHistory }
