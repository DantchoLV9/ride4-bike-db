import BikeCard from "../components/BikeCard";
import Layout from "../components/Layout";
import { getAllBikes } from "../lib/bikes";

export default function Home({ data }) {
	const allBikes = [];
	data.forEach((model) => model.bikes.forEach((bike) => allBikes.push(bike)));
	return (
		<Layout>
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full">
				{allBikes.map((bike) => (
					<BikeCard key={`${bike.make}-${bike.model}`} bikeData={bike} />
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const data = getAllBikes();
	return {
		props: { data },
	};
}
