export type CommandLine = string[]
type SupportedCommandLineTypes = boolean | number | string

export interface ICommand {
	name: string
	description: string
	optionDefinitions: IOptionDefinition[]
	handle: (params: CommandHandlerParams) => void | Promise<void>
}

export type CommandHandlerParams = { argument: SupportedCommandLineTypes, options: IOption[] }

export interface IOptionDefinition {
	name: string
	description: string
	defaultValue?: SupportedCommandLineTypes
	isRequired: boolean
}

export interface IOption {
	name: string
	value: SupportedCommandLineTypes
}

