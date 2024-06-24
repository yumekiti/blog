import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";

import App from "./App.tsx";
import "./index.css";
import { fetchInstance } from "@/utils/fetchInstance";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
	<StrictMode>
		<SWRConfig
			value={{
				fetcher: (resource, init) =>
					fetchInstance()
						.get(resource, init)
						.then((res) => res.data),
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SWRConfig>
	</StrictMode>,
);
