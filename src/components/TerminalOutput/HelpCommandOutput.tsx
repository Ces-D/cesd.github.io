import type { HelpCommand } from "@/CommandLine/commands"

const HelpCommandOutput = ({ response }: { response: ReturnType<HelpCommand["handle"]> }) => {
  if (Array.isArray(response)) {
    return (
      <>
        <p className="pb-6"><b className="">Usage: </b>[command] [options]</p>
        {
          response.map((out, index) => (
            <div key={index} className="pb-5">
              <p><b className="text-gray-600">Command: </b>{out.command.name}</p>
              <p>{out.command.description}</p>
              {!!out.options.length && (
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
                      {out.options.map((opt, index) => (
                        <tr key={index} className="table-row">
                          <td className="table-cell text-left p-1">{opt.name}</td>
                          <td className="table-cell text-left p-1">{opt.description}</td>
                          <td className="table-cell text-left p-1">{Boolean(opt.isRequired).toString()}</td>
                          <td className="table-cell text-left p-1">{opt.defaultValue || "N/A"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          ))
        }
      </>
    )
  }
}

export default HelpCommandOutput