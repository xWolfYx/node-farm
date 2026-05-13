import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const products = JSON.parse(
	fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8"),
);

const server = http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	const fullURL = new URL(req.url ?? "/", `http://${req.headers.host}`);
	const pathName = fullURL.pathname;

	// Product Page
	if (pathName === "/" || pathName === "/overview") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify(products));
	} else if (pathName === "/product") {
		const id = fullURL.searchParams.get("id");
		const product = products.find((p: Product) => p.id === Number(id));
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify(product));
	}
	// API
	else if (pathName === "/api") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(products);
	} else {
		res.writeHead(404, {
			"content-type": "text/html",
			message: "Page not found",
		});
		res.end("<h1>Page not found!</h1>");
	}
});

const PORT = 3000;

server.listen(PORT, "127.0.0.1", () => {
	console.log(`Server is hosted at http://localhost:${PORT}`);
});

type Product = {
	id: number;
	image: string;
	productName: string;
	organic: boolean;
	quantity: number | string;
	price: number;
};
