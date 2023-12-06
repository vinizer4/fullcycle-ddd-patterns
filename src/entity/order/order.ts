import OrderItem from "../orderItem/order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    validate(): boolean {
        if (!this._id) {
            throw new Error("Id is required");
        }
        if (!this._customerId) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items qtd must be greater than 0");
        }
        return true;
    }

    total(): number {
        return this._items.reduce((total, item) => total + item.price(), 0);
    }
}