import Link from "next/link";

const Layout = ({ children }) => {
	return (
		<div>
			<header className="flex justify-between px-20 py-4 text-xl shadow mb-8">
				<Link href="/">
					<a>
						<h1 className="uppercase">Ride 4 - Bikes</h1>
					</a>
				</Link>
				<nav className="uppercase">
					<Link href="/">
						<a>Home</a>
					</Link>
				</nav>
			</header>
			<div className="flex m-auto w-3/4">{children}</div>
		</div>
	);
};

export default Layout;
