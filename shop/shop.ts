interface Item {
	id: number;
	name: string;
	price: number;
}

export default class Shop {
	private items: Item[] = [];
	private counter = 0;

	add(item: Pick<Item, "name" | "price">) {
		this.items.push({
			...item,
			id: this.counter++
		});
	}

	remove(id: number) {
		let i = this.items.findIndex(item => item.id == id);
		if (i != -1) this.items.splice(i, 1);
	}

	get() {
		return this.items.slice();
	}

	findId(id: number) {
		return this.items.find(item => item.id == id);
	}
}
