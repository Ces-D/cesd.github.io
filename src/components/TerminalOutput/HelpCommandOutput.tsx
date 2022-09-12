import { memo } from "react"
import { CommandLineParser } from "@/CommandLine"
import type { HelpCommand } from "@/CommandLine/commands"
import type { HelpHandlerResponse } from "@/CommandLine/definitions"

export const HelpResponseOptionsOutput = memo(({ options, ml = true }: Pick<HelpHandlerResponse, "options"> & { ml?: boolean }) => {
  return (
    <div className={ml ? "ml-36" : ""}>
      <p className="text-yellow-100">Options:</p>
      <table className="table w-full">
        <thead className="table-header-group">
          <tr className="table-row">
            <th></th>
            <th className="table-cell text-left">Description</th>
            <th className="table-cell text-left">Required</th>
            <th className="table-cell text-left">Default Value</th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          {options.map((opt, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell text-left p-1">{`${CommandLineParser.OPTION_PREFIX}${opt.name}`}</td>
              <td className="table-cell text-left p-1">{opt.description}</td>
              <td className="table-cell text-left p-1">{opt.isRequired.toString()}</td>
              <td className="table-cell text-left p-1">{!!opt.defaultValue ? opt.defaultValue?.toString() : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

export const HelpResponseOutput = memo(({ response, borderBottom = false }: { response: HelpHandlerResponse; borderBottom?: boolean }) => {
  return (
    <div className={borderBottom ? "py-2 my-1 border-b-gray-700 border-solid border-b" : "py-2 my-1"}>
      <p className="text-yellow-200 w-32 inline-block">{response.command.name}</p>
      <p className="inline-block pl-4">{response.command.description}</p>
      {!!response.options.length && (
        <HelpResponseOptionsOutput options={response.options} />
      )}
    </div>
  )
})

const HelpCommandOutput = ({ response }: { response: ReturnType<HelpCommand["handle"]> }) => {
  if (Array.isArray(response)) {
    return (
      <>
        <p>Usage:</p>
        <p className="ml-6 pb-2 text-yellow-200">[command] [options]</p>
        <p>Commands:</p>
        <div className="ml-6 mb-3">
          {
            response.map((out, index) => (
              <HelpResponseOutput response={out} key={index} borderBottom={index !== response.length - 1 ? true : false} />
            ))
          }
        </div>
      </>
    )
  }

  return <></>
}

export default HelpCommandOutput