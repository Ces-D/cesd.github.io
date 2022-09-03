import type { NextPage } from "next"
import Layout from "@/components/Layout"
import History from "@/components/History"
import TerminalInput from "@/components/TerminalInput"

const Home: NextPage = () => {

  return (
    <Layout>
      <History />
      <TerminalInput />
    </Layout>
  )
}

export default Home 
