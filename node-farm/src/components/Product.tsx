import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

export default function Product() {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");

	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/product?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProduct(data);
			});
	}, [id]);

	if (!product) return <div>Loading</div>;

	return (
		<figure className="relative bg-white shadow-[0_3rem_6rem_1rem_rgba(0,0,0,0.2)] mx-auto my-0 mt-36 w-240">
			{product.organic && (
				<div className="-top-16 -right-16 z-50 absolute flex justify-center items-center bg-linear-to-b from-[#9be15d] to-[#00e3ae] shadow-[0_2rem_4rem_rgba(0,0,0,0.4)] rounded-full size-44 rotate-15">
					<h5 className="font-black text-[1.8rem] text-white uppercase">
						Organic
					</h5>
				</div>
			)}
			<Link
				to="/"
				className="top-8 left-8 z-50 absolute flex items-center bg-white hover:bg-[#79e17b] shadow-[0_1rem_3rem_rgba(0,0,0,0.3)] px-8 py-0 rounded-full font-bold text-[#555] text-2xl uppercase transition-all duration-300"
			>
				<span className="mr-4 text-[2rem]">👈</span>Back
			</Link>
			<div className="before:block before:top-0 before:left-0 z-40 before:absolute relative before:bg-linear-to-b before:from-[#9be15d] before:to-[#00e3ae] before:opacity-50 h-88 before:size-full overflow-hidden before:content-['']">
				<span className="-top-16 -left-8 z-10 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-top-24 left-36 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-top-16 right-60 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-top-20 right-8 z-10 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-bottom-36 left-72 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-bottom-24 left-20 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="right-56 -bottom-48 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-right-8 -bottom-24 absolute text-[15rem]">
					{product.image}
				</span>
				<span className="-top-28 left-76 absolute text-[15rem]">
					{product.image}
				</span>
			</div>
			<h2 className="bg-linear-to-b from-[#9be15d] to-[#00e3ae] p-4 text-[4rem] text-white text-center [word-spacing:2px]">
				{product.productName}
			</h2>
			<div className="gap-6 grid grid-cols-2 bg-[#eee] px-24 py-16 text-[1.9rem]">
				<p>
					<span className="mr-4 text-[2rem]">🌍</span> {product.from}
				</p>
				<p>
					<span className="mr-4 text-[2rem]">❤️</span> {product.nutrients}
				</p>
				<p>
					<span className="mr-4 text-[2rem]">📦</span> {product.quantity}
				</p>
				<p>
					<span className="mr-4 text-[2rem]">🏷</span> {product.price}€
				</p>
			</div>

			<a
				href="#"
				className="flex justify-center items-center bg-[#79e17b] hover:bg-[#9be15d] shadow-[0_2rem_6rem_rgba(0,0,0,0.2)] p-6 font-bold text-[1.6rem] text-white text-center uppercase scale-107 -skew-x-20 transition-all duration-300"
			>
				<span className="mr-4 text-[2rem]">🛒</span>
				<span className="skew-x-20">Add to shopping card (6.50€)</span>
			</a>

			<p className="px-24 py-20 text-[1.6rem] text-justify leading-[1.8]">
				{product.description}
			</p>
		</figure>
	);
}
