import BikeCard from "./BikeCard";

const BikeGallery = ({ displayData, sortKey }) => {
	console.log(displayData);
	return (
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full mb-16">
			{displayData.map((bike) => (
				<BikeCard
					key={`${bike.make}-${bike.model}`}
					bikeData={bike}
					sortKey={sortKey}
				/>
			))}
		</div>
	);
};

export default BikeGallery;
