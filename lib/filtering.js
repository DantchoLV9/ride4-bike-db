export const FilterData = (allBikes, option, key, onlyBool = false) => {
	let data;
	if (onlyBool) {
		let isTrue = option === "true";
		if (option === "All") {
			data = allBikes;
		} else {
			data = allBikes.filter((bike) => bike[key] === isTrue);
		}
	} else {
		if (option === "All") {
			data = allBikes;
		} else {
			data = allBikes.filter((bike) => bike[key] === option);
		}
	}
	return data;
};

export const SetFilterByHandler = (e, setFilterBy, setFilterDetail) => {
	switch (e.target.value) {
		case "make":
			setFilterBy("make");
			break;
		case "type":
			setFilterBy("type");
			break;
		case "dlc":
			setFilterBy("dlc");
			break;
		case "legendary":
			setFilterBy("legendary");
			break;
		default:
			setFilterBy("make");
			break;
	}
	setFilterDetail("All");
};

export const SetFilterDetailsHandler = (e, setFilterDetail) => {
	setFilterDetail(e.target.value);
};
