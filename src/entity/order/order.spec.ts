import Order from "./order";
import OrderItem from "../orderItem/order_item";

describe("Order unit test", () => {

    it('should throw error when id is empty', () => {

        expect(() => {
            let order = new Order('', 'customer-id', []);
        }).toThrowError("Id is required")
    });

    it('should throw error when customer id is empty', () => {

            expect(() => {
                let order = new Order('order-id', '', []);
            }).toThrowError("CustomerId is required")
    });

    it('should return total of 0 when no items are passed', () => {

        expect(() => {
            let order = new Order('order-id', 'customer-id', []);
        }).toThrowError("Items qtd must be greater than 0")
    });

    it("should calculate total of order", () => {
        const item = new OrderItem("item-id", "item-name", 10);
        const item2 = new OrderItem("item-id-2", "item-name-2", 20);

        const order = new Order("order-id", "customer-id", [item]);
        const total = order.total();

        expect(total).toBe(10);

        const order2 = new Order("order-id", "customer-id", [item, item2]);
        const total2 = order2.total();

        expect(total2).toBe(30);
    });
});