import { CommandError } from "@/utils/errors"
import commands from "./commands"
import type { Command, CommandHandlerParams } from "./definitions"

export default class CommandFactory {
  private commands: Command[] = commands

  private addHelperOptionToCommands = (): CommandFactory => {
    this.commands = this.commands.map(cmd => {
      const helpInterceptedCmd = { ...cmd }

      helpInterceptedCmd.optionDefinitions.push({
        name: "help",
        description: "Find out whats going on!",
        isRequired: false,
        validate: (value) => {
          if (value) { throw new CommandError("Incorrect_Option") }
          return undefined
        }
      })

      return helpInterceptedCmd
    })
    return this
  }

  private addGlobalHelpCommand = (): CommandFactory => {
    this.commands.push({
      name: "help",
      description: "Find out whats going on!",
      optionDefinitions: [],
      handle: (params: CommandHandlerParams) => { }
    })

    return this
  }

  public static generateCommands = (): Command[] => {
    const commandFactory = new CommandFactory()
    commandFactory.addHelperOptionToCommands().addGlobalHelpCommand()

    return commandFactory.commands
  }
}

// TODO: How do you want to handle the help command. This should be an interceptor. Since
// this is meant to return void. There needs to be a view service that handles listing
// the options and command descriptions
// FIXME: The solution to the view controller is another object in state. THe object contains the necessary info required
// to render the view. Command, The handle Command can return type T. Each t can be unique. T can be string response,
// graph response, animation response, or whatever else is creative. T is the data type that is returned by the handle 
// method of a command
