import Link from "next/link"
import { BlogCommand } from "@/CommandLine/commands/BlogCommand";
import { HelpResponseOutput } from "./HelpCommandOutput";

const BlogCommandOutput = ({ response }: { response: ReturnType<BlogCommand['handle']> }) => {
  if ('command' in response && 'options' in response) {
    return (
      <HelpResponseOutput response={response} />
    )
  }

  if (Array.isArray(response)) {
    return (
      <div className="pb-5">
        {response.map((blogPostMeta, index) => (
          <div key={index} className='flex w-full gap-2 mb-2'>
            <p><Link href={`posts/${blogPostMeta.text[3]}`}>{blogPostMeta.text[0]}</Link></p>
            <p>{blogPostMeta.text[1]}</p>
            <p>{blogPostMeta.text[2]}</p>
          </div>
        ))}
      </div>
    )
  }

  return <></>
}

export default BlogCommandOutput