import { CommandError } from "@/utils/errors";
import create from "zustand"
import { immer } from "zustand/middleware/immer"
import CommandFactory from "./CommandFactory";
import CommandLineParser from "./CommandLineParser";
import { Command, CommandHandlerParams } from "./definitions";

const COMMANDS = CommandFactory.generateCommands()
const MAX_HISTORY_LENGTH = 20

interface ConsoleHistoryState {
  inputHistory: string[]
  commandHistory: (Pick<Command, "name" | "handle"> & { handlerParams: CommandHandlerParams })[];
  enterCommand: (input: string) => void;
}


const useConsoleHistory = create<ConsoleHistoryState, [["zustand/immer", never]]>(
  immer((set) => ({
    inputHistory: [],
    commandHistory: [],
    enterCommand: (input) => set(state => {
      if (state.inputHistory.length === MAX_HISTORY_LENGTH) state.inputHistory.pop();
      if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.pop();

      state.inputHistory.unshift(input)

      try {
        const parsedInput = new CommandLineParser(input, COMMANDS)
        state.commandHistory.unshift({ name: parsedInput.Command().name, handle: parsedInput.Command().handle, handlerParams: { options: parsedInput.Options() } })
      } catch (err) {
        if (err instanceof CommandError) {
          const errObject = err.toObject()
          state.commandHistory.unshift({ name: errObject.type, handle: (params: CommandHandlerParams) => { }, handlerParams: { options: [] } })
        }
      }

    })
  })))

export { useConsoleHistory }
