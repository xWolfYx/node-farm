import { Route, Routes } from "react-router";
import OverviewPage from "./pages/OverviewPage";

export default function App() {
	return (
		// TODO: Add styles for the container
		<Routes>
			<Route path="/" element={<OverviewPage />} />
			<Route path="/overview" element={<OverviewPage />} />
			{/* <Route path="/product" Component={} /> */}
		</Routes>
	);
}
