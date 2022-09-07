import { default as BannerCommand } from "./BannerCommand"
import { default as BleepBloopCommand } from "./BleepBloopCommand"
import { default as BlogCommand } from "./BlogCommand"
import { default as IntroductionCommand } from "./IntroductionCommand"
import type { Command, HelpHandlerResponse } from "../definitions"
import { generateHelpCommandResponse } from "../generateHelpCommandResponse"

export type HelpCommand = Command<HelpHandlerResponse[]>

const HelpCommand: HelpCommand = {
  name: "help",
  description: "Find out whats going on!",
  optionDefinitions: [],
  handle: (_) => [BannerCommand, BleepBloopCommand, BlogCommand, IntroductionCommand].map(
    (cmd) => generateHelpCommandResponse(cmd)
  )
}

const Commands = [BannerCommand, IntroductionCommand, BlogCommand, BleepBloopCommand, HelpCommand]
export default Commands