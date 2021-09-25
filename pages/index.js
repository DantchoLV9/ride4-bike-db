import Layout from "../components/Layout";
import { getAllBikes } from "../lib/bikes";
import Head from "next/head";
import { useState } from "react";
import BikeGallery from "../components/BikeGallery";

export default function Home({ data }) {
	const allBikes = [];
	data.forEach((model) => model.bikes.forEach((bike) => allBikes.push(bike)));
	const [displayData, setDisplayData] = useState(allBikes);
	const [sortingOrder, setSortingOrder] = useState("accending");
	const [sortKey, setSortKey] = useState("make");
	const SortByInputHandler = (e) => {
		switch (e.target.value) {
			case "make":
				setDisplayData(allBikes);
				setSortKey("make");
				break;
			case "year":
				setDisplayData(sortBikes(allBikes, "year"));
				setSortKey("year");
				break;
			case "displacement":
				setDisplayData(sortBikes(allBikes, "displacement"));
				setSortKey("displacement");
				break;
			case "power":
				setDisplayData(sortBikes(allBikes, "power", true));
				setSortKey("power");
				break;
			case "torque":
				setDisplayData(sortBikes(allBikes, "torque", true));
				setSortKey("torque");
				break;
			case "weight":
				setDisplayData(sortBikes(allBikes, "weight", true));
				setSortKey("weight");
				break;
			case "price":
				setDisplayData(sortBikes(allBikes, "price"));
				setSortKey("price");
				break;
			case "rating":
				setDisplayData(sortBikes(allBikes, "rating"));
				setSortKey("rating");
				break;
			case "acceleration":
				setDisplayData(sortBikes(allBikes, "acceleration"));
				setSortKey("acceleration");
				break;
			case "top-speed":
				setDisplayData(sortBikes(allBikes, "top-speed"));
				setSortKey("top-speed");
				break;
			case "handling":
				setDisplayData(sortBikes(allBikes, "handling"));
				setSortKey("handling");
				break;
			case "braking-power":
				setDisplayData(sortBikes(allBikes, "braking-power"));
				setSortKey("braking-power");
				break;
			default:
				setDisplayData(allBikes);
				setSortKey("make");
				break;
		}
	};
	const SortOrderInputHandler = (e) => {
		if (e.target.value === "accending") {
			if (sortingOrder === "descending") {
				let data = [...displayData];
				setDisplayData(data.reverse());
				setSortingOrder("accending");
			}
		} else if (e.target.value === "descending") {
			if (sortingOrder === "accending") {
				let data = [...displayData];
				setDisplayData(data.reverse());
				setSortingOrder("descending");
			}
		}
	};
	const sortBikes = (data, key, possibleNoData = false) => {
		let arr = [...data];
		let noPowerDataArr = [];
		if (possibleNoData) {
			arr.forEach((item, index) => {
				if (item.power === "--") {
					noPowerDataArr.push(item);
					arr.splice(index, 1);
				}
			});
		}
		arr.sort((a, b) => {
			return b[key] > a[key] ? 1 : b[key] < a[key] ? -1 : 0;
		});
		if (possibleNoData) {
			arr.push(...noPowerDataArr);
		}
		return arr;
	};
	return (
		<Layout>
			<Head>
				<title>Ride 4 - Bikes</title>
			</Head>
			<div className="mb-6">
				<div>
					<label className="mr-2">Sort by:</label>
					<select className="p-2 rounded-l" onChange={SortByInputHandler}>
						<option value="make">Make</option>
						<option value="year">Year</option>
						<option value="displacement">Displacement</option>
						<option value="power">Power</option>
						<option value="torque">Torque</option>
						<option value="weight">Weight</option>
						<option value="price">Price</option>
						<option value="rating">Rating</option>
						<option value="acceleration">Acceleration</option>
						<option value="top-speed">Top speed</option>
						<option value="handling">Handling</option>
						<option value="braking-power">Braking power</option>
					</select>
					<select className="p-2 rounded-r" onChange={SortOrderInputHandler}>
						<option value="accending">Accending</option>
						<option value="descending">Descending</option>
					</select>
				</div>
			</div>
			<BikeGallery displayData={displayData} sortKey={sortKey} />
		</Layout>
	);
}

export async function getStaticProps() {
	const data = getAllBikes();
	return {
		props: { data },
	};
}
