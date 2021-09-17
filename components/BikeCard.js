import Image from "next/image";

const BikeCard = ({ bikeData }) => {
	return (
		<div>
			<div className="rounded-lg overflow-hidden shadow-md bg-white relative">
				<Image
					src={bikeData.image}
					alt={bikeData.model}
					width="1920"
					height="1080"
					layout="responsive"
				/>
				<div className="overflow-hidden">
					<h2 className="px-2 py-1 text-center text-lg h-auto bg-white">
						<span className="px-2 py-1 font-semibold">{bikeData.make}</span>
						{bikeData.model}
					</h2>
					<h2 className="uppercase font-semibold px-2 py-2 text-center bg-blue-500">
						{bikeData.type}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default BikeCard;
