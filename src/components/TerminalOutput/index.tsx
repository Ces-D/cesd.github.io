import { memo } from "react"
import type { Command, HelpHandlerResponse, TextHandlerResponse } from "@/CommandLine/definitions"
import BannerCommandOutput from "./BannerCommandOutput"
import HelpCommandOutput from "./HelpCommandOutput"

const TerminalOutput = ({ output, name }: Pick<Command<unknown>, "name"> & { output: ReturnType<Command<unknown>["handle"]> }) => {
  if ('error' in output) {
    return (
      <div className="w-full text-pink-700">
        <p>{output.error}</p>
      </div>
    )
  }

  if (name === "banner") {
    return <BannerCommandOutput response={output as TextHandlerResponse} />
  }

  if (name === "help") {
    return <HelpCommandOutput response={output as HelpHandlerResponse[]} />
  }

  return null
}

export default memo(TerminalOutput)