import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen font-body">
			<header className="flex justify-between px-3.5 md:px-20 py-4 text-xl shadow mb-8 bg-white">
				<Link href="/">
					<a>
						<h1 className="uppercase font-medium">
							<span className="font-bold italic">Ride</span>{" "}
							<span className="font-bold italic text-blue-500">4</span> | Bikes
						</h1>
					</a>
				</Link>
				<nav className="uppercase font-medium">
					<Link href="/">
						<a>Home</a>
					</Link>
				</nav>
			</header>
			<div className="flex m-auto w-fill px-3.5 md:px-0 md:w-3/4">
				{children}
			</div>
		</div>
	);
};

export default Layout;
