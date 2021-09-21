import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ bikeData }) => {
	let typeBGColor = "bg-white";
	switch (bikeData.type) {
		case "supermotard":
			typeBGColor = "bg-blue-300";
			break;
		case "naked":
			typeBGColor = "bg-blue-300";
			break;
		case "sport":
			typeBGColor = "bg-blue-300";
			break;
		case "naked racing modified":
			typeBGColor = "bg-red-300";
			break;
		case "sport racing modified":
			typeBGColor = "bg-red-300";
			break;
		case "endurance modified":
			typeBGColor = "bg-green-300";
			break;
	}

	return (
		<div>
			<Link href={`/${bikeData.slug}`}>
				<a>
					<div className="rounded-lg overflow-hidden shadow-md bg-white relative">
						<Image
							src={bikeData.image}
							alt={bikeData.model}
							width="1920"
							height="1080"
							layout="responsive"
						/>
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
