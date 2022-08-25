import { CommandError } from "@/utils/errors"
import commands from "./commands"
import { HandlerTextResponse, isCommand } from "./definitions"
import type { Command } from "./definitions"

export default class CommandFactory {
  private commands: Command[] = commands

  private addHelperOptionToCommands = () => {
    this.commands = this.commands.map(cmd => {
      if (isCommand(cmd)) {
        cmd.name !== 'banner' && cmd.optionDefinitions.push({
          name: "help",
          description: "Find out whats going on!",
          isRequired: false,
          validate: (value?: string) => {
            if (value) { throw new CommandError("Incorrect_Option") }
            return undefined
          }
        })
      }
      return cmd
    })
  }

  private createHelpCommand = () => {
    const helpCommand: Command = {
      name: "help",
      description: "Find out whats going on!",
      optionDefinitions: [],
      handle: (params): HandlerTextResponse => ({
        isError: false, response: this.commands.map(cmd => ({ labels: [cmd.name, ...cmd.optionDefinitions.map(opt => opt.name)], text: cmd.description }))
      })
    }

    this.commands.push(helpCommand)
  }

  public static generateCommands = (): Command[] => {
    const commandFactory = new CommandFactory()
    commandFactory.addHelperOptionToCommands()
    commandFactory.createHelpCommand()

    return commandFactory.commands as Command[]
  }
}

