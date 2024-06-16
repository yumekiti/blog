import { memo } from "react";
import { Outlet } from "react-router-dom";

const Component = () => {
	return (
		<div className="App h-screen flex flex-col">
			<header />
			<main className="flex-grow">
				<Outlet />
			</main>
			<footer />
		</div>
	);
};

export default memo(Component);
