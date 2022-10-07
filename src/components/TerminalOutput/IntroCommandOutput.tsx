import { IntroductionCommand } from "@/CommandLine/commands/IntroductionCommand"
import ErrorCommandOutput from "./ErrorCommandOutput";

const IntroCommandOutput = ({ response }: { response: ReturnType<IntroductionCommand['handle']> }) => {
  if ("error" in response) {
    return <ErrorCommandOutput response={response} />
  }

  if ('text' in response) {
    return (
      <p> {response.text[0]} </p>
    )
  }

  return null
}

export default IntroCommandOutput
