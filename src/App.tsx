import { Route, Routes } from "react-router-dom";

import Detail from "@/components/pages/Detail";
import Home from "@/components/pages/Home";
import NotFoundPage from "@/components/pages/NotFoundPage";
import Layout from "@/components/templates/Layout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path=":id" element={<Detail />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
