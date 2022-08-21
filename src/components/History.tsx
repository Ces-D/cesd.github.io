import { useConsoleHistory } from "@/lib/CommandLine"
import TerminalInput from "./TerminalInput"

const History = () => {
  const consoleHistory = useConsoleHistory(state => state.commandHistory)

  return (
    <>
      {
        consoleHistory.map((consoleCommand) => {
          const handlerResponse = consoleCommand.handle(consoleCommand.handlerParams)
          return (
            <div key={consoleCommand.id}>
              <TerminalInput value={consoleCommand.input} disabled />
            </div>
          )
        })
      }
    </>
  )

}

export default History
