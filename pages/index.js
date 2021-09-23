import BikeCard from "../components/BikeCard";
import Layout from "../components/Layout";
import { getAllBikes } from "../lib/bikes";
import Head from "next/head";
import { useState } from "react";
import BikeGallery from "../components/BikeGallery";

export default function Home({ data }) {
	const allBikes = [];
	data.forEach((model) => model.bikes.forEach((bike) => allBikes.push(bike)));
	const [displayData, setDisplayData] = useState(allBikes);

	const SortByInputHandler = (e) => {
		if (e.target.value === "year") {
			setDisplayData(sortByYear(allBikes));
		} else if (e.target.value === "make") {
			setDisplayData(allBikes);
		}
	};
	const sortByYear = (data) => {
		let arr = [...data];
		arr.sort((a, b) => {
			return b.year > a.year ? 1 : b.year < a.year ? -1 : 0;
		});
		return arr;
	};
	return (
		<Layout>
			<Head>
				<title>Ride 4 - Bikes</title>
			</Head>
			<div>
				<div>
					<label>Sort by:</label>
					<select onChange={SortByInputHandler}>
						<option value="make">Make</option>
						<option value="year">Year</option>
					</select>
				</div>
			</div>
			<BikeGallery displayData={displayData} />
		</Layout>
	);
}

export async function getStaticProps() {
	const data = getAllBikes();
	return {
		props: { data },
	};
}
