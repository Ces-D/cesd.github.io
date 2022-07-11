import { CommandError } from "@/utils/errors";
import create from "zustand"
import { immer } from "zustand/middleware/immer"
import CommandFactory from "./CommandFactory";
import CommandLineParser from "./CommandLineParser";
import { Option, Command } from "./definitions";

const COMMANDS = CommandFactory.generateCommands()
const MAX_HISTORY_LENGTH = 20

interface ConsoleHistoryState {
  inputHistory: string[]
  commandHistory: { command: Command, options: Option[] }[];
  enterCommand: (input: string) => void;
}


const useConsoleHistory = create<ConsoleHistoryState, [["zustand/immer", never]]>(
  immer((set) => ({
    inputHistory: [],
    commandHistory: [],
    enterCommand: (input) => set(state => {
      if (state.inputHistory.length === MAX_HISTORY_LENGTH) state.inputHistory.pop();
      if (state.commandHistory.length === MAX_HISTORY_LENGTH) state.commandHistory.pop();

      state.inputHistory.push(input)

      try {
        const parsedInput = new CommandLineParser(input, COMMANDS)
        state.commandHistory.push({ command: parsedInput.Command, options: parsedInput.Options })
      } catch (err) {
        if (err instanceof CommandError) {
          // TODO: how do I handle errors? 
        }

      }
    })
  })))

export { useConsoleHistory }
