import Image from 'next/image'
import { BannerCommand } from "@/CommandLine/commands/BannerCommand"

const BannerCommandOutput = ({ response }: { response: ReturnType<BannerCommand["handle"]> }) => {
  if ("text" in response) {
    return (
      <>
        <div className="relative h-64 my-1" style={{ maxWidth: "40rem" }}>
          <Image src={response.text[0]} layout="fill" objectFit="contain" />
        </div>
        <p className="mb-1">{response.text[1]}</p>
      </>
    )
  }

  return <></>
}

export default BannerCommandOutput