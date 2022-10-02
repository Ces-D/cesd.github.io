import Link from "next/link"
import { BlogCommand } from "@/CommandLine/commands/BlogCommand";
import { HelpResponseOptionsOutput } from "./HelpCommandOutput";
import ErrorCommandOutput from "./ErrorCommandOutput";

const BlogCommandOutput = ({ response }: { response: ReturnType<BlogCommand['handle']> }) => {
  if ('command' in response && 'options' in response) {
    return (
      <>
        <p>Usage:</p>
        <p className="ml-6 pb-2 text-yellow-200">blog [options]</p>
        <p className="pb-2">Description: {response.command.description}</p>
        <div className="ml-6 mb-3">
          {!!response.options.length && <HelpResponseOptionsOutput options={response.options} ml={false} />}
        </div>
      </>
    )
  }

  if (Array.isArray(response)) {
    return (
      <table className="table-fixed w-full">
        <thead className="table-header-group">
          <tr className="table-row">
            <th className="table-cell text-left w-1/3">Post</th>
            <th className="table-cell text-center w-1/5">Published</th>
            <th className="table-cell text-left">Summary</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {response.map((blogPostMeta, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell"><Link href={`posts/${blogPostMeta.text[3]}`} passHref>
                <a className="text-bold text-yellow-100 underline">{blogPostMeta.text[0]}</a>
              </Link></td>
              <td className="table-cell text-center">{blogPostMeta.text[2]}</td>
              <td className="table-cell">{blogPostMeta.text[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  if ("error" in response)  {
    return <ErrorCommandOutput response={response} />
  }

  return null
}

export default BlogCommandOutput
