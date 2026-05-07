import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<div className="relative flex justify-center items-center bg-linear-to-b from-[#9be15d] to-[#00e3ae] shadow-[0_3rem_6rem_1rem_rgba(0,0,0,0.2)] mt-48 p-8 rounded-2xl">
			<h1 className="text-white text-9xl">Page not found!</h1>
			<Link
				to="/"
				className="top-6 left-6 absolute bg-linear-to-b from-[#9be15d] to-[#00e3ae] shadow-[0_0_1rem_0.2rem_rgba(0,0,0,0.2)] px-6 py-2 rounded-2xl font-bold text-white text-2xl"
			>
				Back
			</Link>
		</div>
	);
}
