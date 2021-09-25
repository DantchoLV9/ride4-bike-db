import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ bikeData, sortKey }) => {
	let typeBGColor = "bg-white";
	let sortIndicator = "";
	let ratingLetter = "";
	switch (bikeData.type) {
		case "supermotard":
			typeBGColor = "bg-blue-300";
			ratingLetter = "M";
			break;
		case "naked":
			typeBGColor = "bg-blue-300";
			ratingLetter = "N";
			break;
		case "sport":
			typeBGColor = "bg-blue-300";
			ratingLetter = "S";
			break;
		case "naked racing modified":
			typeBGColor = "bg-red-300";
			ratingLetter = "N";
			break;
		case "sport racing modified":
			typeBGColor = "bg-red-300";
			ratingLetter = "S";
			break;
		case "endurance modified":
			typeBGColor = "bg-green-300";
			ratingLetter = "S";
			break;
	}
	switch (sortKey) {
		case "make":
			sortIndicator = "";
			break;
		case "year":
			sortIndicator = bikeData[sortKey];
			break;
		case "displacement":
			sortIndicator =
				bikeData.displacement === "--"
					? bikeData.displacement
					: `${bikeData.displacement} cc`;
			break;
		case "power":
			sortIndicator =
				bikeData.power === "--" ? bikeData.power : `${bikeData.power} HP`;
			break;
		case "torque":
			sortIndicator =
				bikeData.torque === "--" ? bikeData.torque : `${bikeData.torque} Nm`;
			break;
		case "weight":
			sortIndicator =
				bikeData.weight === "--" ? bikeData.weight : `${bikeData.weight} Kg`;
			break;
		case "price":
			sortIndicator = `${bikeData.price} Credits`;
			break;
		case "rating":
			sortIndicator = `${ratingLetter} ${bikeData.rating}`;
			break;
		case "acceleration":
			sortIndicator = bikeData[sortKey];
			break;
		case "top-speed":
			sortIndicator = bikeData[sortKey];
			break;
		case "handling":
			sortIndicator = bikeData[sortKey];
			break;
		case "braking-power":
			sortIndicator = bikeData[sortKey];
			break;
		default:
			sortIndicator = "";
			break;
	}
	return (
		<div>
			<Link href={`/${bikeData.slug}`}>
				<a>
					<div className="rounded-lg overflow-hidden shadow-md bg-white relative">
						<div className="relative">
							<Image
								src={bikeData.image}
								alt={bikeData.model}
								width="1920"
								height="1080"
								layout="responsive"
							/>
							<p className="absolute bottom-2 left-2 bg-white px-2 rounded-md">
								{sortIndicator}
							</p>
						</div>

						{bikeData.legendary && (
							<div className="bg-yellow-500 w-6/12 top-1/10 left-16/25 text-center text-white font-bold absolute transform rotate-45">
								Legendary
							</div>
						)}
						{bikeData.dlc && (
							<div className="bg-purple-500 w-4/12 top-1/20 -left-1/10 text-center text-white font-bold absolute transform -rotate-45">
								DLC
							</div>
						)}
						<div className="overflow-hidden">
							<h2 className="px-2 py-1 text-center text-lg h-auto bg-white">
								<span className="px-2 py-1 font-semibold">{bikeData.make}</span>
								{bikeData.model}
							</h2>
							<h2
								className={`uppercase font-semibold px-2 py-2 text-center ${typeBGColor}`}
							>
								{bikeData.type}
							</h2>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default BikeCard;
