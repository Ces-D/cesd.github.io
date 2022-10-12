import BleepBloopCommand from "@/CommandLine/commands/BleepBloopCommand"
import ErrorCommandOutput from "./ErrorCommandOutput"

const BleepBloopCommandOutput = ({ response }: { response: ReturnType<BleepBloopCommand["handle"]> }) => {
  if ("text" in response) {
    return (
      <p className="mb-1">{response.text[0]}</p>
    )
  }

  if ("error" in response) {
    return <ErrorCommandOutput response={response} />
  }

  return null
}

export default BleepBloopCommandOutput
