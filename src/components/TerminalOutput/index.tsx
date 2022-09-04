import { memo } from "react"
import type { Command } from "@/lib/CommandLine/definitions"

const TerminalOutput = ({ output, name }: Pick<Command, "name"> & { output: ReturnType<Command["handle"]> }) => {
  if ('error' in output) {
    return (
      <div className="w-full text-pink-700">
        <p>{output.error}</p>
      </div>
    )
  }

  return null
}

export default memo(TerminalOutput)