import * as express from "express";
import Shop from "./shop/shop";
import shopAPI from "./shop/shopAPI";
import errorHandler from "./util/errHandler";

let app = express();

let shop = new Shop();
shop.add({ name: "Test1", price: 1 });

app.use("/shop", shopAPI(shop));
app.use(errorHandler);

app.get("/", (req, res) => {
	res.send("Atsiskaitymas 1. API: localhost:3000/shop");
});

app.listen(3000, function() {
	console.log("Server started!");
});
