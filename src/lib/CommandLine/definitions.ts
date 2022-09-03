export type Console = string[]
type SupportedCommandLineType = boolean | number | string

export interface Command {
  name: string
  description: string
  optionDefinitions: IOptionDefinition[]
  handle: (params: CommandHandlerParams) => ErrorHandlerResponse | TextHandlerResponse | TextHandlerResponse[] | HelpHandlerResponse | HelpHandlerResponse[]
}

export interface CommandHandlerParams {
  options: Option[]
}

export type Option = Pick<Command, "name"> & { value: SupportedCommandLineType }

export interface IOptionDefinition {
  name: string
  description: string,
  defaultValue?: SupportedCommandLineType
  isRequired: boolean
  validate: (value?: string) => SupportedCommandLineType | undefined
}

export type ErrorHandlerResponse = { error: string }
export type TextHandlerResponse = { text: string[] }
export type HelpHandlerResponse = { command: string[], options: string[][] }
