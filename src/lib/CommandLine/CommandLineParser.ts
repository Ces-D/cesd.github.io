import { CommandError } from "@/utils/errors";
import type { Command, Console, IOptionDefinition, Option } from "./definitions";

export const OPTION_PREFIX = "-"

export default class CommandLineParser {
  private consoleIn: Console
  private command: Command
  private options: Option[]

  constructor(consoleInput: string, appCommands: Command[]) {
    this.consoleIn = consoleInput.split(" ")
    this.command = this.parseCommandFromConsoleInput(this.consoleIn, appCommands)
    this.options = this.parseOptionsFromConsoleInput(this.consoleIn, this.command.optionDefinitions)
  }

  public Command = () => this.command
  public Options = () => this.options

  private parseCommandFromConsoleInput = (consoleInputs: Console, appCommands: Command[]): Command => {
    const command = appCommands.find(cmd => cmd.name === consoleInputs[0])
    if (!command) throw new CommandError("Command_Not_Found");
    return command
  }

  private parseOptionsFromConsoleInput = (consoleInputs: Console, activeCommandDefinitions: IOptionDefinition[]): Option[] => {
    const isOptionPrefixed = (inp: string): Boolean => inp.charAt(0) === OPTION_PREFIX

    let possibleOptionInputs: { option: string, value: string }[] = []
    consoleInputs.forEach((input, index) => { isOptionPrefixed(input) && possibleOptionInputs.push({ option: input.slice(1), value: consoleInputs[index++] }) })

    const options: Option[] = []
    possibleOptionInputs.forEach(possibility => {
      const match = activeCommandDefinitions.find(opt => opt.name === possibility.option)
      if (!match) throw new CommandError("Command_Not_Found")
      const matchValue = match.validate(possibility.value)
      if (!matchValue && !match.defaultValue) throw new CommandError("Command_Not_Found")

      options.push({ name: match.name, value: matchValue || match.defaultValue! })
    })

    return options
  }

}

