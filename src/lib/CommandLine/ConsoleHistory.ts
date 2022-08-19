import create, { StateCreator } from "zustand"
import produce, { Draft } from "immer"

import { CommandError } from "@/utils/errors";
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


const useConsoleHistory = create(
  // immer((set) => ({
  //   inputHistory: [],
  //   commandHistory: [],
  //   enterCommand: (input) => set(state => {
  //     if (state.inputHistory.length === MAX_HISTORY_LENGTH) state.inputHistory.pop();
  //     if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.pop();

  //     state.inputHistory.unshift(input)

  //     try {
  //       const parsedInput = new CommandLineParser(input, COMMANDS)
  //       state.commandHistory.unshift({ name: parsedInput.Command().name, handle: parsedInput.Command().handle, handlerParams: { options: parsedInput.Options() } })
  //     } catch (err) {
  //       if (err instanceof CommandError) {
  //         const errObject = err.toObject()
  //         state.commandHistory.unshift({ name: errObject.type, handle: (params: CommandHandlerParams) => { }, handlerParams: { options: [] } })
  //       }
  //     }

  //   })
  // }))
)

export { useConsoleHistory }
