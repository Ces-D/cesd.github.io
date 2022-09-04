import type { NextPage } from "next"
import { useConsoleHistory } from "@/lib/CommandLine"
import Layout from "@/components/Layout"
import TerminalInput from "@/components/TerminalInput"
import TerminalOutput from "@/components/TerminalOutput"

const Home: NextPage = () => {
  const consoleHistory = useConsoleHistory(state => state.commandHistory)

  return (
    <Layout>
      {
        consoleHistory.map((consoleCommand) => {
          console.log(consoleCommand)
          const handleResponse = consoleCommand.handle(consoleCommand.handlerParams)
          return (
            <div key={consoleCommand.id} className="px-2 pt-5">
              <TerminalInput disabled={true} autofocus={false} value={consoleCommand.input} />
              <TerminalOutput output={handleResponse} name={consoleCommand.name} />
            </div>
          )
        })
      }
      <TerminalInput autofocus={true} />
    </Layout>
  )
}

export default Home 
