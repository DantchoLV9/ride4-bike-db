import fs from "fs";
import path, { join } from "path";
import matter from "gray-matter";

const bikesDir = join(process.cwd(), "content/bikes");
const publicBikesDir = join(process.cwd(), "public", "bikes");

function getMakeSlugs() {
	return fs.readdirSync(bikesDir);
}

function getBikeSlugs(makeSlug) {
	const bikeSlugs = fs
		.readdirSync(join(bikesDir, makeSlug))
		.filter((slug) => slug !== "index.md");
	return bikeSlugs;
}

function getMakeData(makeSlug) {
	const fileContent = fs.readFileSync(
		join(bikesDir, makeSlug, "index.md"),
		"utf-8"
	);
	const { data } = matter(fileContent);
	return data;
}

function getBikeData(bikeSlug, makeSlug) {
	const fileContent = fs.readFileSync(
		join(bikesDir, makeSlug, bikeSlug, "index.md"),
		"utf-8"
	);
	const { data } = matter(fileContent);
	data.image = copyImage(bikeSlug, makeSlug).split("\\").join("/");
	data.slug = `bikes/${makeSlug}/${bikeSlug}`;
	return data;
}

function copyImage(bikeSlug, makeSlug) {
	if (fs.existsSync(publicBikesDir)) {
		fs.copyFileSync(
			join(bikesDir, makeSlug, bikeSlug, "image.png"),
			join(publicBikesDir, `${makeSlug}-${bikeSlug}.png`)
		);
	} else {
		fs.mkdirSync(publicBikesDir);
		fs.copyFileSync(
			join(bikesDir, makeSlug, bikeSlug, "image.png"),
			join(publicBikesDir, `${makeSlug}-${bikeSlug}.png`)
		);
	}
	return join("\\", "bikes", `${makeSlug}-${bikeSlug}.png`);
}

export async function getBikeBySlug(slug) {
	return getBikeData(slug[1], slug[0]);
}

function craftSlugs(makeSlug) {
	const paths = getBikeSlugs(makeSlug).map((bikeSlug) => {
		return {
			params: {
				slug: [makeSlug, bikeSlug],
			},
		};
	});
	return paths;
}

export function getAllBikeSlugs() {
	const makeSlugs = getMakeSlugs();
	const paths = [];
	makeSlugs.map((makeSlug) => {
		paths.push(...craftSlugs(makeSlug));
	});
	return paths;
}

export function getAllBikes() {
	if (fs.existsSync(publicBikesDir)) {
		fs.rmSync(publicBikesDir, { recursive: true });
	}
	let data = [];
	const makeSlugs = getMakeSlugs();
	makeSlugs.forEach((slug) => data.push(getMakeData(slug)));
	data.forEach((make) => {
		make.bikes = [];
		getBikeSlugs(make.slug).forEach((bike) => {
			if (!("bikes" in make)) {
				make.bikes.push(getBikeData(bike, make.slug));
			} else {
				if (!make.bikes.includes(getBikeData(bike, make.slug))) {
					make.bikes.push(getBikeData(bike, make.slug));
				}
			}
		});
	});
	return data;
}
