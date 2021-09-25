import Layout from "../components/Layout";
import { getAllBikes } from "../lib/bikes";
import Head from "next/head";
import { useState } from "react";
import BikeGallery from "../components/BikeGallery";
import {
	SortData,
	SetSortByHandler,
	SetSortOrderHandler,
} from "../lib/sorting";

import {
	SetFilterByHandler,
	SetFilterDetailsHandler,
	FilterData,
} from "../lib/filtering";

export default function Home({ data }) {
	const allBikes = [];
	const allMakes = [];
	const allTypes = [
		"supermotard",
		"naked",
		"sport",
		"naked racing modified",
		"sport racing modified",
		"endurance modified",
	];
	data.forEach((model) => model.bikes.forEach((bike) => allBikes.push(bike)));
	data.forEach((model) =>
		allMakes.push({
			...Object.keys(model)
				.filter((key) => key !== "bikes")
				.reduce((obj, key) => {
					obj[key] = model[key];
					return obj;
				}, {}),
		})
	);

	const [displayData, setDisplayData] = useState(
		SortData(allBikes, "make").reverse()
	);
	const [sortingOrder, setSortingOrder] = useState("accending");
	const [sortKey, setSortKey] = useState("make");
	const [displaySortKey, setDisplaySortKey] = useState("make");
	const [filterBy, setFilterBy] = useState("make");
	const [filterDetail, setFilterDetail] = useState("All");

	const TriggerSortAndFilterHandler = () => {
		let data;
		if (filterBy === "dlc" || filterBy === "legendary") {
			data = FilterData(allBikes, filterDetail, filterBy, true);
		} else {
			data = FilterData(allBikes, filterDetail, filterBy);
		}
		if (sortKey === "power" || sortKey === "torque" || sortKey === "weight") {
			data = SortData(data, sortKey, true);
		} else {
			data = SortData(data, sortKey);
			if (sortKey === "make") {
				data.reverse();
			}
		}
		if (sortingOrder !== "accending") {
			data.reverse();
		}
		setDisplaySortKey(sortKey);
		setDisplayData(data);
	};
	return (
		<Layout>
			<Head>
				<title>Ride 4 - Bikes</title>
			</Head>
			<div className="mb-6 flex flex-col items-center justify-between lg:flex-row gap-y-2">
				<div className="flex items-center justify-center flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-start">
					<label className="mr-2">Sort by:</label>
					<div>
						<select
							className="p-2 rounded-l bg-white"
							onChange={(e) => SetSortByHandler(e, setSortKey, setSortingOrder)}
							value={sortKey}
						>
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
						<select
							className="p-2 rounded-r bg-white"
							onChange={(e) => SetSortOrderHandler(e, setSortingOrder)}
							value={sortingOrder}
						>
							<option value="accending">Accending</option>
							<option value="descending">Descending</option>
						</select>
					</div>
				</div>
				<div className="flex items-center justify-center flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-start">
					<label className="mr-2">Filter by:</label>
					<div className="mr-2">
						<select
							className="p-2 rounded-l bg-white"
							onChange={(e) =>
								SetFilterByHandler(e, setFilterBy, setFilterDetail)
							}
							value={filterBy}
						>
							<option value="make">Make</option>
							<option value="type">Type</option>
							<option value="dlc">DLC</option>
							<option value="legendary">Legendary</option>
						</select>
						{filterBy === "make" ? (
							<select
								className="p-2 rounded-r bg-white"
								onChange={(e) => SetFilterDetailsHandler(e, setFilterDetail)}
								value={filterDetail}
							>
								<option value="All">All</option>
								{allMakes.map((make) => (
									<option key={`filterByInput${make.make}`} value={make.make}>
										{make.make}
									</option>
								))}
							</select>
						) : (
							""
						)}
						{filterBy === "type" ? (
							<select
								className="p-2 rounded-r bg-white"
								onChange={(e) => SetFilterDetailsHandler(e, setFilterDetail)}
								value={filterDetail}
							>
								<option value="All">All</option>
								{allTypes.map((type) => (
									<option
										className="capitalize"
										key={`filterByInput${type}`}
										value={type}
									>
										{type}
									</option>
								))}
							</select>
						) : (
							""
						)}
						{filterBy === "dlc" || filterBy === "legendary" ? (
							<select
								className="p-2 rounded-r bg-white"
								onChange={(e) => SetFilterDetailsHandler(e, setFilterDetail)}
								value={filterDetail}
							>
								<option value="All">All</option>
								<option value="true">Yes</option>
								<option value="false">No</option>
							</select>
						) : (
							""
						)}
					</div>
					<button
						className="bg-blue-600 p-1.5 rounded text-white font-medium"
						onClick={TriggerSortAndFilterHandler}
					>
						Submit
					</button>
				</div>
			</div>
			<BikeGallery displayData={displayData} sortKey={displaySortKey} />
		</Layout>
	);
}

export async function getStaticProps() {
	const data = getAllBikes();
	return {
		props: { data },
	};
}
