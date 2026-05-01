import { Route, Routes } from "react-router";
import OverviewPage from "./pages/OverviewPage";

export default function App() {
	return (
		// TODO: Add styles for the container
		<div className="px-20 pt-20 pb-2 text-[62.5%]">
			<Routes>
				<Route path="/" element={<OverviewPage />} />
				<Route path="/overview" element={<OverviewPage />} />
				{/* <Route path="/product" Component={} /> */}
			</Routes>
		</div>
	);
}
