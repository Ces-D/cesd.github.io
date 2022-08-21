import create from "zustand"
import produce from "immer"
import { CommandError } from "@/utils/errors";
import CommandFactory from "./CommandFactory";
import CommandLineParser from "./CommandLineParser";
import type { Command, CommandHandlerParams, TextCommandHandlerResponse } from "./definitions";

const COMMANDS = CommandFactory.generateCommands()
const MAX_HISTORY_LENGTH = 20

interface ConsoleHistoryState {
  commandHistory: (Pick<Command, "name" | "handle"> & { handlerParams: CommandHandlerParams, input: string, id: string })[];
  enterCommand: (input: string) => void;
}


const useConsoleHistory = create<ConsoleHistoryState>((set) => ({
  inputHistory: [],

  commandHistory: [],

  enterCommand: (input) => set(produce(state => {
    if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.pop();
    try {
      const parsedInput = new CommandLineParser(input, COMMANDS)
      state.commandHistory.unshift(
        { name: parsedInput.Command().name, handle: parsedInput.Command().handle, handlerParams: { options: parsedInput.Options() }, input, id: crypto.randomUUID() }
      )
    } catch (err) {
      if (err instanceof CommandError) {
        const errObject = err.toObject()
        state.commandHistory.unshift(
          {
            name: errObject.type,
            handle: (params: CommandHandlerParams): TextCommandHandlerResponse => ({
              isError: true, response: [{ labels: [errObject.code.toString()], text: errObject.message }]
            }),
            handlerParams: { options: [] }, input, id: crypto.randomUUID()
          }
        )
      }
    }
  }))

}))

export { useConsoleHistory }
