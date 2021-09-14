import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const bikesDir = join(process.cwd(), "content/bikes");

function getMakeSlugs() {
	return fs.readdirSync(bikesDir);
}

function getMakeName(makeSlug) {
	const fileContent = fs.readFileSync(
		join(bikesDir, makeSlug, "index.md"),
		"utf-8"
	);
	const { data } = matter(fileContent);
	return data;
}

export function getAllBikes() {
	let data = [];
	// Create an array of objects for each make
	const makeSlugs = getMakeSlugs();
	makeSlugs.forEach((slug) => data.push(getMakeName(slug)));

	//TODO: Add the slug to each object for each make

	console.log(data);
	//makeSlugs.forEach((make) => data.push(fs.readdirSync(join(bikesDir, make))));
	return data;
}
