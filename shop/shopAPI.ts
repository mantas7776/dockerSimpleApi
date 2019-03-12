import * as express from "express";
import Shop from "./shop";
import * as t from "io-ts";
import HTTPError from "../util/HTTPError";

const Paramsid = t.type({
	id: t.number
});

export default function shopAPI(shop: Shop) {
	let router: express.Router = express.Router();

	router.get("/", (req, res) => {
		res.json(shop.get());
	});

	router.get("/:id", (req, res) => {
		let validation = Paramsid.decode(req.params);

		if (!validation.isRight()) throw new HTTPError(404, "Item not found");

		let params = validation.value;
		let item = shop.findId(params.id);
	});

	return router;
}
