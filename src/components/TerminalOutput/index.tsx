import { memo } from "react"
import type { Command, ErrorHandlerResponse } from "@/CommandLine/definitions"
import BannerCommandOutput from "./BannerCommandOutput"
import HelpCommandOutput from "./HelpCommandOutput"
import BlogCommandOutput from "./BlogCommandOutput"
import type { BlogCommand } from "@/CommandLine/commands/BlogCommand"
import { HelpCommand } from "@/CommandLine/commands"
import { BannerCommand } from "@/CommandLine/commands/BannerCommand"

const TerminalOutput = ({ output, name }: { name: Command<unknown>['name'] | 'error', output: ReturnType<Command<unknown>['handle']> }) => {
  if (name === 'error') {
    return (
      <div className="w-full text-pink-700">
        <p>{(output as ErrorHandlerResponse).error}</p>
      </div>
    )
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

  return null
}

export default memo(TerminalOutput)