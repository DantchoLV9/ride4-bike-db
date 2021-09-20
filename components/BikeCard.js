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
