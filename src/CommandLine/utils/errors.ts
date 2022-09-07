type ErrorCode = 400 | 404 | 402 | 403 | 500
type CommandLineErrorType = "Command_Not_Found" | "Incorrect_Option"

export class CommandError extends Error {
  private _code: number

  constructor(message: CommandLineErrorType, code?: ErrorCode) {
    super(message)
    this._code = code ?? 400
  }

  public Code = () => this._code

  public toObject = () => ({
    type: CommandError.constructor.name,
    message: this.message,
    code: this._code
  })
}

