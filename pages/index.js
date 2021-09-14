import Layout from "../components/layout";
import { getAllBikes } from "../lib/bikes";

export default function Home({ allBikes }) {
	return (
		<Layout>
			<div className="grid"></div>
		</Layout>
	);
}

export async function getStaticProps() {
	const allBikes = getAllBikes();
	return {
		props: { allBikes },
	};
}
