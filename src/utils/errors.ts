type ErrorCode = 400 | 404 | 402 | 403 | 500
type CommandLineErrorType = "Command_Not_Found" | "Incorrect_Option"

export class CommandError extends Error {
	constructor(message: CommandLineErrorType, code?: ErrorCode) {
		super(message)
		code = code ?? 400
	}
}

