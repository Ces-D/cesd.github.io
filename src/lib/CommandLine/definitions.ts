export type Console = string[]
type SupportedCommandLineType = boolean | number | string

export interface Command {
  name: string
  description: string
  optionDefinitions: IOptionDefinition[]
  handle: (params: CommandHandlerParams) => TextCommandHandlerResponse | void
}

export const isCommand = (object: unknown): object is Command => {
  return Object.prototype.hasOwnProperty.call(object, "name") && Object.prototype.hasOwnProperty.call(object, "description") && Object.prototype.hasOwnProperty.call(object, "handle")
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

export type TextCommandHandlerResponse = {
  isError: boolean;
  response: { labels?: string[]; text: string }[]
}
