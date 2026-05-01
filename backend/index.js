import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const products = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
	const pathName = req.url;

	if (pathName === "/" || pathName === "/overview")
		res.end("This is the overview");
	else if (pathName === "/product") res.end("This is the product");
	else if (pathName === "/api") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(products);
	}
});

const PORT = 3000;

server.listen(PORT, "127.0.0.1", () => {
	console.log(`Server is hosted at http://localhost:${PORT}`);
});
