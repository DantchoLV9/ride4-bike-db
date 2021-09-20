import { useEffect, useRef } from "react";

const ProgressBar = ({ dataName, data }) => {
	const fillBar = useRef(null);
	useEffect(() => {
		fillBar.current.style.width = `${((data * 100) / 10).toFixed(0)}%`;
	}, [data]);
	return (
		<div className="mb-2">
			<div className="flex justify-between">
				<div>{dataName}</div>
				<div>{data}</div>
			</div>
			<div className="bg-coolGray-300 h-3.5 overflow-hidden rounded-full">
				<div ref={fillBar} className="bg-red-400 h-full w-1/3"></div>
			</div>
		</div>
	);
};

export default ProgressBar;
