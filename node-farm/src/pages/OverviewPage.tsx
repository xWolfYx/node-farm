import Card, { type CardType } from "../components/Card";

const products: CardType[] = [
	{
		emoji: "🥑",
		title: "Fresh Avocado",
		organic: true,
		amount: 4,
		price: 6.5,
	},
	{
		emoji: "🧀",
		title: "Goat and Sheep Cheese",
		organic: false,
		amount: 250,
		price: 5.0,
	},
	{
		emoji: "🥦",
		title: "Apollo Broccoli",
		organic: true,
		amount: 3,
		price: 5.0,
	},
	{
		emoji: "🥕",
		title: "Baby Carrots",
		organic: true,
		amount: 20,
		price: 3.0,
	},
	{
		emoji: "🌽",
		title: "Sweet Corncobs",
		organic: true,
		amount: 2,
		price: 2.0,
	},
];

export default function OverviewPage() {
	return products.map(({ emoji, title, organic, amount, price }, i) => (
		<Card
			key={i}
			emoji={emoji}
			title={title}
			organic={organic}
			amount={amount}
			price={price}
		/>
	));
}
