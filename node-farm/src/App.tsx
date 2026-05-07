import { Link, Route, Routes } from "react-router";
import Product from "./components/Product";
import NotFoundPage from "./pages/NotFoundPage";
import OverviewPage from "./pages/OverviewPage";

export default function App() {
	return (
		// TODO: Add styles for the container
		<div className="mx-auto my-0 w-400">
			<Link to="/">
				<h1 className="before:block before:top-[50%] before:left-[50%] before:-z-10 before:absolute relative before:bg-linear-to-b before:from-[#9be15d] before:to-[#00e3ae] before:opacity-[0.8] before:w-[49%] before:h-[65%] text-[6rem] text-white text-center before:content-[''] -skew-5 before:skew-y-370 before:-translate-1/2 [word-spacing:3px]">
					🌽 Node Farm 🥦
				</h1>
			</Link>
			<div className="mt-32">
				<Routes>
					<Route path="/" element={<OverviewPage />} />
					<Route path="/overview" element={<OverviewPage />} />
					<Route path="/product" element={<Product />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</div>
	);
}
