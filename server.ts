import * as express from "express";
import Shop from "./shop/shop";
import shopAPI from "./shop/shopAPI";

let app = express();

let shop = new Shop();

app.use("/shop", shopAPI(shop));

app.get("/", (req, res) => {
	res.send("Atsiskaitymas 1. API: localhost:3000/shop");
});

app.listen(3000, function() {
	console.log("Server started!");
});
