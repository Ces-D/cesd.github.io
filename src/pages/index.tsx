import type { NextPage } from "next"
import Layout from "@/components/Layout"
import Console from "@/components/Console"
import TextArea from "@/components/TextArea"

const Home: NextPage = () => {
	return (
		<Layout>
			<Console variant="out">
				<p>Hello and Welcome</p>
			</Console>
			<Console variant="out">
				<p>Type -h for a list of features</p>
			</Console>
			<Console variant="in">
				<TextArea />
			</Console>
		</Layout>
	)
}

export default Home
