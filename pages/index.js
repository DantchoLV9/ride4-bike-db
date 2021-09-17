import BikeCard from "../components/BikeCard";
import Layout from "../components/Layout";
import { getAllBikes } from "../lib/bikes";

export default function Home({ data }) {
	const allBikes = [];
	data.forEach((model) => model.bikes.forEach((bike) => allBikes.push(bike)));
	console.log(allBikes);
	return (
		<Layout>
			<div className="grid w-full">
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
