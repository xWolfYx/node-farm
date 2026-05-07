import { useEffect, useState } from "react";
import Card from "../components/Card";
import Spinner from "../components/Spinner";
import type { CardType } from "../lib/types";

export default function OverviewPage() {
	const [products, setProducts] = useState<CardType[] | null>(null);

	useEffect(() => {
		fetch("http://localhost:3000/overview")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);

	if (!products) return <Spinner />;

	console.log(products);

	return products.map((p: CardType) => (
		<Card
			key={p.id}
			id={p.id}
			image={p.image}
			productName={p.productName}
			organic={p.organic}
			quantity={p.quantity}
			price={p.price}
		/>
	));
}
