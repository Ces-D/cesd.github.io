import commands from "./commands"
import { HelpHandlerResponse } from "./definitions"
import type { Command } from "./definitions"

export default class CommandFactory {
  private commands: Command[] = commands

  private createHelpCommand = () => {
    const helpCommand: Command = {
      name: "help",
      description: "Find out whats going on!",
      optionDefinitions: [],
      handle: (_): HelpHandlerResponse[] => this.commands.map((cmd) => CommandFactory.generateHelpCommandResponse(cmd))
    }
    this.commands.push(helpCommand)
  }

  public static generateHelpCommandResponse = (cmd: Command): HelpHandlerResponse => {
    return {
      command: [cmd.name, cmd.description],
      options: cmd.optionDefinitions.map(opt => [opt.name, opt.description, `${opt.isRequired ? 'True' : 'False'}`, `${opt.defaultValue || ''}`])
    }
  }

  public static generateCommands = (): Command[] => {
    const commandFactory = new CommandFactory()
    commandFactory.createHelpCommand()

    return commandFactory.commands as Command[]
  }

}

