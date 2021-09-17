import Image from "next/image";

const BikeCard = ({ bikeData }) => {
	console.log(bikeData.image);
	return (
		<div>
			<Image
				src={bikeData.image}
				alt={bikeData.model}
				width="1920"
				height="1080"
				layout="responsive"
			/>
			<h1>{bikeData.model}</h1>
		</div>
	);
};

export default BikeCard;
