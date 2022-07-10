import type { NextPage } from "next"
import Layout from "@/components/Layout"
import Console from "@/components/Console"
import TextArea from "@/components/TextArea"
import Typography from "@/components/Typography"

const Home: NextPage = () => {
	return (
		<Layout>
			<Console variant="out">
				<Typography color="purple_mountain">Hello and Welcome</Typography>
			</Console>
			<Console variant="out">
				<Typography>Type -h for a list of features</Typography>
			</Console>
			<Console variant="in">
				<TextArea />
			</Console>
			<Console variant="out">
				<Typography>This would be the response to the request</Typography>
			</Console>
		</Layout>
	)
}

export default Home
