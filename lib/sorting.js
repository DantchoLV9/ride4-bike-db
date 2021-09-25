export const SortData = (data, key, possibleNoData = false) => {
	let arr = [...data];
	let noPowerDataArr = [];
	if (possibleNoData) {
		arr.forEach((item, index) => {
			if (item.power === "--") {
				noPowerDataArr.push(item);
				arr.splice(index, 1);
			}
		});
	}
	arr.sort((a, b) => {
		return b[key] > a[key] ? 1 : b[key] < a[key] ? -1 : 0;
	});
	if (possibleNoData) {
		arr.push(...noPowerDataArr);
	}
	return arr;
};
export const SetSortByHandler = (e, setSortKey, setSortingOrder) => {
	switch (e.target.value) {
		case "make":
			setSortKey("make");
			break;
		case "year":
			setSortKey("year");
			break;
		case "displacement":
			setSortKey("displacement");
			break;
		case "power":
			setSortKey("power");
			break;
		case "torque":
			setSortKey("torque");
			break;
		case "weight":
			setSortKey("weight");
			break;
		case "price":
			setSortKey("price");
			break;
		case "rating":
			setSortKey("rating");
			break;
		case "acceleration":
			setSortKey("acceleration");
			break;
		case "top-speed":
			setSortKey("top-speed");
			break;
		case "handling":
			setSortKey("handling");
			break;
		case "braking-power":
			setSortKey("braking-power");
			break;
		default:
			setSortKey("make");
			break;
	}
	setSortingOrder("accending");
};
export const SetSortOrderHandler = (e, setSortingOrder) => {
	if (e.target.value === "accending") {
		setSortingOrder("accending");
	} else if (e.target.value === "descending") {
		setSortingOrder("descending");
	}
};
