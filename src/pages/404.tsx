import Link from "next/link"
import Layout from "@/components/Layout"

const FourZeroFour = () => {
  return (
    <Layout title="404 | Page Not Found">
      <h2 className="text-amber-300 pt-8 text-center text-4xl">Oops! This page does not exist!</h2>
      <h4 className="underline text-center text-xl text-amber-100 mt-4"><Link href="/">Try Again</Link></h4>
    </Layout>
  )
}

export default FourZeroFour
