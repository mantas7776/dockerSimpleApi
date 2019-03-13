interface Item {
	id: number;
	name: string;
	price: number;
}

export default class Shop {
	private items: Item[] = [];
	private counter = 0;

	public add(item: Pick<Item, "name" | "price">) {
		this.items.push({
			...item,
			id: this.counter++
		});
	}

	public addWithId(item: Item) {
		this.items.push(item);
	}

	private findItemIndex(id: number) {
		return this.items.findIndex(item => item.id == id);
	}

	public remove(id: number) {
		let i = this.findItemIndex(id);
		if (i != -1) this.items.splice(i, 1);
	}

	public get() {
		return this.items.slice();
	}

	public findId(id: number) {
		return this.items.find(item => item.id == id);
	}

	public update(item: Item) {
		let i = this.findItemIndex(item.id);
		this.items[i] = item;
	}
}
