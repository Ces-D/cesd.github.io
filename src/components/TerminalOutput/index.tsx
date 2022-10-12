import { memo } from "react"

import { HelpCommand } from "@/CommandLine/commands"
import { BannerCommand } from "@/CommandLine/commands/BannerCommand"
import { IntroductionCommand } from "@/CommandLine/commands/IntroductionCommand"

import type { Command, ErrorHandlerResponse } from "@/CommandLine/definitions"
import type { BlogCommand } from "@/CommandLine/commands/BlogCommand"

import ErrorCommandOutput from "./ErrorCommandOutput"
import BannerCommandOutput from "./BannerCommandOutput"
import HelpCommandOutput from "./HelpCommandOutput"
import BlogCommandOutput from "./BlogCommandOutput"
import IntroCommandOutput from "./IntroCommandOutput"
import BleepBloopCommandOutput from "./BleepBloopCommandOutput"
import BleepBloopCommand from "@/CommandLine/commands/BleepBloopCommand"

const TerminalOutput = ({ output, name }: { name: Command<unknown>['name'] | 'error', output: ReturnType<Command<unknown>['handle']> }) => {
  if (name === 'error') {
    return <ErrorCommandOutput response={output as ErrorHandlerResponse} />
  }

  if (name === "banner") {
    return <BannerCommandOutput response={output as ReturnType<BannerCommand["handle"]>} />
  }

  if (name === "help") {
    return <HelpCommandOutput response={output as ReturnType<HelpCommand["handle"]>} />
  }

  if (name === 'blog') {
    return <BlogCommandOutput response={output as ReturnType<BlogCommand['handle']>} />
  }

  if (name === 'intro') {
    return <IntroCommandOutput response={output as ReturnType<IntroductionCommand['handle']>} />
  }

  if (name === 'bleep-bloop') {
    return <BleepBloopCommandOutput response={output as ReturnType<BleepBloopCommand['handle']>} />
  }

  return null
}

export default memo(TerminalOutput)
