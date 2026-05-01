import clsx from "clsx";

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
		<div className="mx-auto my-0 w-380">
			<h1>🌽 Node Farm 🥦</h1>
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
		<figure className="flex bg-white shadow-[0_2rem_6rem_1rem_rgba(0,0,0,0.15)] hover:shadow-[0_3rem_8rem_2rem_rgba(0,0,0,0.15)] mb-20 hover:scale-[1.08] -skew-5 transition-all duration-200 2rem 6rem 1rem rgba(0, 0, 0, 0.15)]">
			<div className="pt-6 pr-24 pb-2 pl-6 text-[5.5rem] leading-[1.2] tracking-[-4rem]">
				{emoji.repeat(2)}
			</div>

			<div className="flex items-center bg-linear-to-b from-[#9be15d] to-[#00e3ae] mr-auto px-12 py-0">
				<h2 className="font-size-[3.25rem] text-white skew-5">{title}</h2>
			</div>

			<div className="flex">
				<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
					<h6
						className={clsx(
							"p-7 font-normal text-[1.8rem] skew-5 card__detail--organic",
							organic &&
								"font-black uppercase text-[1.9rem] bg-linear-to-r from-[#9be15d] to-[#00e3ae] bg-clip-text text-transparent",
						)}
					>
						{organic ? "Organic!" : ""}
					</h6>
				</div>

				<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
					<h6 className="p-7 font-normal text-[1.8rem] skew-5 card__detail--organic">{`${amount} ${emoji} per 📦`}</h6>
				</div>

				<div className="flex items-center self-stretch border-[#ddd] last:border-0 border-r">
					<h6 className="p-7 font-black text-[1.9rem] skew-5 card__detail--organic">
						{price}€
					</h6>
				</div>
			</div>

			<a
				className="flex flex-[0,0,auto] justify-center items-center bg-[#79e17b] hover:bg-[#9be15d] p-10 font-black text-[1.6rem] text-white text-center uppercase transition-all"
				href="#"
			>
				<span>
					Detail <i className="text-[2rem]">👉</i>
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
