import { useConsoleHistory } from "@/lib/CommandLine"
import TerminalInput from "./TerminalInput"

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
              {handlerResponse.isError && <h2 className="text-red-500">Error</h2>}
              {'path' in handlerResponse.response && (
                <div>
                  <img src={handlerResponse.response.path} />
                  <h2>{handlerResponse.response.text}</h2>
                </div>
              )}
              {Array.isArray(handlerResponse.response) && (
                <div>
                  {handlerResponse.response.map((item) => (
                    <div className="mb-2">
                      <p>{item.labels.join(', ')}</p>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })
      }
    </>
  )

}

export default History
