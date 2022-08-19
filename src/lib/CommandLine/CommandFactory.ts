import { CommandError } from "@/utils/errors"
import commands from "./commands"
import { isCommand } from "./definitions"
import type { Command } from "./definitions"

export default class CommandFactory {
  private commands: unknown[] = commands

  private addHelperOptionToCommands = (): CommandFactory => {
    this.commands = this.commands.map(cmd => {
      if (isCommand(cmd)) {
        cmd.optionDefinitions.push({
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
    return this
  }
  public static generateCommands = (): Command[] => {
    const commandFactory = new CommandFactory()
    commandFactory.addHelperOptionToCommands()

    return commandFactory.commands as Command[]
  }
}

// TODO: How do you want to handle the help command. This should be an interceptor. Since
// this is meant to return void. There needs to be a view service that handles listing
// the options and command descriptions
// FIXME: The solution to the view controller is another object in state. THe object contains the necessary info required
// to render the view. Command, The handle Command can return type T. Each t can be unique. T can be string response,
// graph response, animation response, or whatever else is creative. T is the data type that is returned by the handle
// method of a command