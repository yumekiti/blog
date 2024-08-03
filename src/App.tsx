import { Route, Routes } from "react-router-dom";

import Detail from "@/components/pages/Detail";
import List from "@/components/pages/List";
import NotFoundPage from "@/components/pages/NotFoundPage";
import Tags from "@/components/pages/Tags";
import Layout from "@/components/templates/Layout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={<List title="最新記事" path="%2Fblog%2Fcontents" />}
				/>
				<Route path=":id" element={<Detail />} />
				<Route path="tags" element={<Tags />} />
				<Route
					path="tech"
					element={<List title="技術" path="%2Fblog%2Ftech" />}
				/>
				<Route
					path="daily"
					element={<List title="日常" path="%2Fblog%2Fdaily" />}
				/>
				<Route
					path="review"
					element={<List title="レビュー" path="%2Fblog%2Freview" />}
				/>
				<Route
					path="history"
					element={<List title="活動" path="%2Fblog%2Fhistory" />}
				/>
				<Route
					path="other"
					element={<List title="その他" path="%2Fblog%2Fother" />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};

export default App;
