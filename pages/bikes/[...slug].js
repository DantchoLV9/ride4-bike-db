import Layout from "../../components/Layout";
import { getBikeBySlug, getAllBikeSlugs } from "../../lib/bikes";
import Image from "next/image";
import ProgressBar from "../../components/ProgressBar";

export default function Bike({ bikeData }) {
	console.log(bikeData);
	return (
		<Layout>
			<div className="w-full">
				<div className="flex items-center mb-8">
					<h2 className="text-3xl">
						<span className="font-semibold ">{bikeData.make}</span>{" "}
						{bikeData.model}
					</h2>
					{bikeData.legendary && (
						<span className="uppercase font-bold bg-yellow-400 px-1.5 rounded-md ml-4">
							Legendary
						</span>
					)}
				</div>
				<div className="flex flex-row gap-x-6">
					<div className="flex-2">
						<div className="rounded-md overflow-hidden ">
							<Image
								src={bikeData.image}
								alt={bikeData.model}
								width="1920"
								height="1080"
								layout="responsive"
							/>
						</div>
					</div>
					<div className="flex-1">
						<div className="mb-10">
							<h3 className="font-semibold text-xl mb-2">Performance</h3>
							<ProgressBar
								dataName="Acceleration"
								data={bikeData.acceleration}
							/>
							<ProgressBar dataName="Top speed" data={bikeData["top-speed"]} />
							<ProgressBar dataName="Handling" data={bikeData.handling} />
							<ProgressBar
								dataName="Braking power"
								data={bikeData["braking-power"]}
							/>
						</div>
						<div className="mb-10">
							<h3 className="font-semibold text-xl mb-2">Technical Data</h3>
							<div className="grid grid-cols-2 gap-y-2">
								<div>
									<h4 className="font-medium">Displacement</h4>
									<div>
										{bikeData.displacement === "--"
											? bikeData.displacement
											: `${bikeData.displacement} cc`}{" "}
									</div>
								</div>
								<div>
									<h4 className="font-medium">Engine</h4>
									<div>
										{bikeData.engine[0]} | {bikeData.engine[1]}
									</div>
								</div>
								<div>
									<h4 className="font-medium">Power</h4>
									<div>
										{bikeData.power === "--"
											? bikeData.power
											: `${bikeData.power} HP`}
									</div>
								</div>
								<div>
									<h4 className="font-medium">Torque</h4>
									<div>
										{bikeData.torque === "--"
											? bikeData.torque
											: `${bikeData.torque} Nm`}
									</div>
								</div>
								<div>
									<h4 className="font-medium">Weight</h4>
									<div>
										{bikeData.weight === "--"
											? bikeData.weight
											: `${bikeData.weight} Kg`}
									</div>
								</div>
								<div>
									<h4 className="font-medium">Headlights</h4>
									<div>{bikeData.headlights ? "Yes" : "No"}</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-semibold text-xl mb-2">Other</h3>
							<div className="grid grid-cols-2 gap-y-2">
								<div>
									<h4 className="font-medium">Legendary</h4>
									<div>{bikeData.legendary ? "Yes" : "No"}</div>
								</div>
								<div>
									<h4 className="font-medium">Price</h4>
									<div>{bikeData.price} Credits</div>
								</div>
								<div>
									<h4 className="font-medium">Rating</h4>
									<div>{bikeData.rating}</div>
								</div>
								<div>
									<h4 className="font-medium">Type</h4>
									<div className="capitalize">{bikeData.type}</div>
								</div>
								<div>
									<h4 className="font-medium">Year</h4>
									<div>{bikeData.year}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllBikeSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const bikeData = await getBikeBySlug(params.slug);
	return { props: { bikeData } };
}
