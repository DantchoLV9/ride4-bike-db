import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const bikesDir = join(process.cwd(), "content/bikes");

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
	return data;
}

export function getAllBikes() {
	let data = [];
	console.log(data);
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
