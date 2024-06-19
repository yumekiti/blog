import { Outlet } from "react-router-dom";

import Header from "../organisms/Header";

const Component = () => {
	return (
		<div className="App h-screen flex flex-col">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<footer />
		</div>
	);
};

export default Component;
