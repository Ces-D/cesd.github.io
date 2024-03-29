import Image from 'next/image'
import { BannerCommand } from "@/CommandLine/commands/BannerCommand"
import ErrorCommandOutput from "./ErrorCommandOutput"

const BannerCommandOutput = ({ response }: { response: ReturnType<BannerCommand["handle"]> }) => {
  if ("text" in response) {
    return (
      <>
        <div className="relative h-64 my-1" style={{ maxWidth: "40rem" }}>
          <Image src={response.text[0]} alt="banner" layout="fill" objectFit="contain" />
        </div>
        <p className="mb-1">{response.text[1]}</p>
      </>
    )
  }

  if ("error" in response) {
    return <ErrorCommandOutput response={response} />
  }

  return null
}

export default BannerCommandOutput
