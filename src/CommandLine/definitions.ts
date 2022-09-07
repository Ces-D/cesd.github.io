export type Console = string[]
type SupportedCommandLineType = boolean | number | string
type SupportedCommandName = "banner" | "bleep-bloop" | "blog" | "intro" | "help"
type SupportedCommandOptionName = "num" | "help"

export enum ParserEventCode {
  INPUT_RECEIVED,
  INPUT_NOT_RECEIVED,
  COMMAND_FOUND,
  COMMAND_NOT_FOUND,
  OPTION_FOUND,
  OPTION_NOT_FOUND,
  OPTION_VALUE_FOUND,
  OPTION_VALUE_NOT_FOUND,
  PARSE_COMPLETE
}

export interface Command<T> {
  name: SupportedCommandName
  description: string
  optionDefinitions: IOptionDefinition[]
  handle: (params: CommandHandlerParams) => T
}

export interface CommandHandlerParams {
  options: Option[]
  callStack?: ParserEventCode[]
}

export type Option = { name: SupportedCommandOptionName; value: SupportedCommandLineType }

export interface IOptionDefinition {
  name: SupportedCommandOptionName
  description: string,
  defaultValue?: SupportedCommandLineType
  isRequired: boolean
  validate: (value?: string) => SupportedCommandLineType | undefined // this should only be run on possibleValues
}

export type ErrorHandlerResponse = { error: string }
export type TextHandlerResponse = { text: string[] }
export type HelpHandlerResponse = { command: Pick<Command<unknown>, "name" | "description">, options: Omit<IOptionDefinition, "validate">[] }
