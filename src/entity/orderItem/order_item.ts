export default class OrderItem {
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    price(): number {
        return this._price;
    }

    name(): string {
        return this._name;
    }

    id(): string {
        return this._id;
    }
}