import { useConsoleHistory } from "@/lib/CommandLine"
import TerminalInput from "./TerminalInput"
import type { HelpHandlerResponse } from "@/lib/CommandLine/definitions"

const History = () => {
  const consoleHistory = useConsoleHistory(state => state.commandHistory)

  return (
    <>
      {
        consoleHistory.map((consoleCommand) => {
          console.log(consoleCommand)
          const handlerResponse = consoleCommand.handle(consoleCommand.handlerParams)

          return (
            <div key={consoleCommand.id}>
              <TerminalInput value={consoleCommand.input} disabled />
              {'error' in handlerResponse && <p className="text-red-500" >{handlerResponse.error}</p>}
              {'text' in handlerResponse && <p>{handlerResponse.text}</p>}
              {Array.isArray(handlerResponse) && 'command' in handlerResponse[0] &&
                handlerResponse.map((helpItem: HelpHandlerResponse) => (
                  <>
                    <p>{helpItem.command}</p>
                    <p>{JSON.stringify(helpItem.options)}</p>
                  </>
                ))
              }
            </div>
          )
        })
      }
    </>
  )

}

export default History
