import type { Command, IOptionDefinition, Option } from "./definitions";
import { ParserEventCode } from "./definitions";
import Commands from "./commands"

export default class CommandLineParser {
  public static readonly OPTION_PREFIX = "-"
  public consoleInput?: string
  private tokens?: string[]
  public command?: Command<unknown>
  public options: Option[]
  public callStack: ParserEventCode[]

  constructor(consoleInput: string) {
    this.callStack = []
    this.options = []
    if (!!consoleInput.length) {
      this.emitParserEvent(ParserEventCode.INPUT_RECEIVED)
      this.consoleInput = consoleInput
      this.tokens = consoleInput.split(' ')
      const commandFound = this.parseCommandFromInputTokens(this.tokens)
      if (commandFound) {
        this.parseOptionsFromFoundCommand(this.tokens, this.command!)
      }
    } else {
      this.emitParserEvent(ParserEventCode.INPUT_NOT_RECEIVED)
    }
  }

  private emitParserEvent = (e: ParserEventCode) => this.callStack.unshift(e)

  private parseCommandFromInputTokens = (tokens: string[]) => {
    const targetCommand = Commands.find(cmd => cmd.name === tokens[0])
    if (!!targetCommand) {
      this.emitParserEvent(ParserEventCode.COMMAND_FOUND)
      this.command = targetCommand
      return true
    } else {
      this.emitParserEvent(ParserEventCode.COMMAND_NOT_FOUND)
      return false
    }
  }

  private parseOptionsFromFoundCommand = (tokens: string[], cmd: Command<unknown>,) => {
    const isOptionPrefixed = (token: string) => token.charAt(0) === CommandLineParser.OPTION_PREFIX

    const tkns = tokens.slice(1)
    let index = 0
    let requiresValue = true

    const breakOutOfOptionSearchLoop = (error: "option" | "value") => {
      error === "option" && this.emitParserEvent(ParserEventCode.OPTION_NOT_FOUND)
      error === "value" && this.emitParserEvent(ParserEventCode.OPTION_VALUE_NOT_FOUND)
      index = tkns.length
    }

    const getValueByValidating = (optionDefinition: IOptionDefinition) => {
      const possibleValue: string | undefined = isOptionPrefixed(tkns[index + 1] || CommandLineParser.OPTION_PREFIX) ? undefined : tkns[index + 1] // when indexing out of range you get undefined and if it is an option then its not a value
      const validated = optionDefinition.validate(possibleValue)
      return validated
    }

    while (index <= tkns.length - 1) {
      const current = tkns[index]

      if (!isOptionPrefixed(current) && index === 0) { breakOutOfOptionSearchLoop("option"); break; } // first item after command should be an option

      if (isOptionPrefixed(current)) {
        const possible = current.slice(1)
        const possibleOptionDefinition = cmd.optionDefinitions.find(opt => opt.name === possible)
        if (!!possibleOptionDefinition) {
          this.emitParserEvent(ParserEventCode.OPTION_FOUND)
          requiresValue = possibleOptionDefinition.isRequired && !Boolean(possibleOptionDefinition.defaultValue)

          if (requiresValue) {
            const validatedValue = getValueByValidating(possibleOptionDefinition)
            if (!!validatedValue) {
              this.emitParserEvent(ParserEventCode.OPTION_VALUE_FOUND)
              this.options.push({ name: possibleOptionDefinition.name, value: validatedValue })
              index = index + 2
              break;
            } else { breakOutOfOptionSearchLoop("value"); break; } // value is not valid and is required
          } else {
            const validatedValue = getValueByValidating(possibleOptionDefinition)
            if (!!validatedValue) {
              this.emitParserEvent(ParserEventCode.OPTION_VALUE_FOUND)
              this.options.push({ name: possibleOptionDefinition.name, value: validatedValue })
              index = index + 2
              break;
            } else {
              if (!!possibleOptionDefinition.defaultValue) {
                this.emitParserEvent(ParserEventCode.OPTION_VALUE_FOUND)
                this.options.push({ name: possibleOptionDefinition.name, value: possibleOptionDefinition.defaultValue })
                index = index + 1
                break
              } else {
                breakOutOfOptionSearchLoop("value")
              }
            }
          }
        } else { breakOutOfOptionSearchLoop("option"); break; } // token is prefixed but it is not an option to this command
      }
    }
  }

  public static isSuccessfulParse = (parserOutput: CommandLineParser) => {
    const intersects = (a: ParserEventCode[], b: ParserEventCode[]) => a.filter(Set.prototype.has, new Set(b))
    const CAUSE_FOR_FAILURE = [ParserEventCode.COMMAND_NOT_FOUND, ParserEventCode.INPUT_NOT_RECEIVED, ParserEventCode.OPTION_NOT_FOUND, ParserEventCode.OPTION_VALUE_NOT_FOUND]

    return intersects(parserOutput.callStack, CAUSE_FOR_FAILURE).length === 0 ? true : false
  }
}
