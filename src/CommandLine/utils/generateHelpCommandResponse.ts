import type { Command, HelpHandlerResponse } from "../definitions"

export const generateHelpCommandResponse = (cmd: Command<unknown>): HelpHandlerResponse => {
  return {
    command: { name: cmd.name, description: cmd.description },
    options: cmd.optionDefinitions.map(opt => ({ name: opt.name, description: opt.description, isRequired: opt.isRequired, defaultValue: opt.defaultValue }))
  }
}