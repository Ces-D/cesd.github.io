export type Console = string[]
type SupportedCommandLineType = boolean | number | string

export interface Command {
  name: string
  description: string
  optionDefinitions: IOptionDefinition[]
  handle: (params: CommandHandlerParams) => void | Promise<void>
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
