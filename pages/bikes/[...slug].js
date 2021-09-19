import { getBikeBySlug, getAllBikeSlugs } from "../../lib/bikes";

export default function Bike({ bikeData }) {
	return <div>Asd</div>;
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
