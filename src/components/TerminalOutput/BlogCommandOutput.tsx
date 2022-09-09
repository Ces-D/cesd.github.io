import Link from "next/link"
import { CommandLineParser } from "@/CommandLine";
import { BlogCommand } from "@/CommandLine/commands/BlogCommand";

const BlogCommandOutput = ({ response }: { response: ReturnType<BlogCommand['handle']> }) => {
  if ('command' in response && 'options' in response) {
    return (
      <div className="pb-5">
        <p><b className="text-gray-600">Command: </b>{response.command.name}</p>
        <p>{response.command.description}</p>
        {!!response.options.length && (
          <>
            <p className="pt-1">Options:</p>
            <table className="table w-full">
              <thead className="table-header-group">
                <tr className="table-row">
                  <th className="table-cell text-left p-1">Name</th>
                  <th className="table-cell text-left p-1">Description</th>
                  <th className="table-cell text-left p-1">Is Required</th>
                  <th className="table-cell text-left p-1">Default Value</th>
                </tr>
              </thead>
              <tbody className="table-row-group">
                {response.options.map((opt, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-cell text-left p-1">{`${CommandLineParser.OPTION_PREFIX}${opt.name}`}</td>
                    <td className="table-cell text-left p-1">{opt.description}</td>
                    <td className="table-cell text-left p-1">{Boolean(opt.isRequired).toString()}</td>
                    <td className="table-cell text-left p-1">{!!opt.defaultValue ? opt.defaultValue?.toString() : "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
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