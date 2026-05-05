import { Link } from "react-router";

const products: Card[] = [
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
	return (
		<div className="mx-auto my-0 w-400">
			<Link to="/">
				<h1 className="before:block before:top-[50%] before:left-[50%] before:-z-10 before:absolute relative before:bg-linear-to-b before:from-[#9be15d] before:to-[#00e3ae] before:opacity-[0.8] before:w-[49%] before:h-[65%] text-[6rem] text-white text-center before:content-[''] -skew-5 before:skew-y-370 before:-translate-1/2 [word-spacing:3px]">
					🌽 Node Farm 🥦
				</h1>
			</Link>
			<div className="mt-32">
				{products.map(({ emoji, title, organic, amount, price }, i) => (
					<Card
						key={i}
						emoji={emoji}
						title={title}
						organic={organic}
						amount={amount}
						price={price}
					/>
				))}
			</div>
		</div>
	);
}

function Card({ emoji, title, organic, amount, price }: Card) {
	return (
		<figure className="flex bg-white shadow-[0_2rem_6rem_1rem_rgba(0,0,0,0.15)] hover:shadow-[0_3rem_8rem_2rem_rgba(0,0,0,0.15)] mb-20 hover:scale-[1.08] -skew-x-20 transition-all duration-500">
			<div className="pt-6 pr-24 pb-2 pl-6 text-[5.5rem] leading-[1.2] tracking-[-4rem] skew-x-20">
				{emoji.repeat(2)}
			</div>
			<div className="flex items-center bg-linear-to-b from-[#9be15d] to-[#00e3ae] mr-auto px-12 py-0">
				<h2 className="text-[3.25rem] text-white skew-x-20">{title}</h2>
			</div>

			<div className="flex">
				{organic && (
					<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
						<h6 className="bg-clip-text bg-linear-to-r from-[#9be16d] to-[#00e3ae] p-7 font-black text-[1.9rem] text-transparent uppercase skew-x-20">
							"Organic!"
						</h6>
					</div>
				)}

				<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
					<h6 className="p-7 font-normal text-[1.8rem] skew-x-20">
						{amount} {emoji} per 📦
					</h6>
				</div>

				<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
					<h6 className="p-7 font-black text-[1.9rem] skew-x-20">{price}€</h6>
				</div>
			</div>

			<a
				className="flex flex-none justify-center items-center bg-[#79e17b] hover:bg-[#9be15d] p-10 font-black text-[1.6rem] text-white text-center uppercase transition-all duration-300"
				href="#"
			>
				<span className="skew-x-20">
					Detail <i className="ml-4 text-[2rem]">👉</i>
				</span>
			</a>
		</figure>
	);
}

type Card = {
	emoji: string;
	title: string;
	organic: boolean;
	amount: number;
	price: number;
};
