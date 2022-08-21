import type { NextPage } from "next"
import { useEffect } from "react"
import { useConsoleHistory } from "@/lib/CommandLine"
import Layout from "@/components/Layout"
import History from "@/components/History"
import TerminalInput from "@/components/TerminalInput"

const Home: NextPage = () => {
  const setCommand = useConsoleHistory(state => state.enterCommand)

  useEffect(() => {
    setCommand("banner")
  }, [])


  return (
    <Layout>
      <History />
      <TerminalInput />
    </Layout>
  )
}

export default Home 
