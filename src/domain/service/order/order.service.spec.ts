import OrderItem from "../../entity/orderItem/order_item";
import Order from "../../entity/order/order";
import OrderService from "./order.service";

describe('Order service unit tests', () => {

    it("should get total of all orders", () => {

        const orderItem1 = new OrderItem("i1", 'OrderItem 1', 100, "p1", 1);
        const orderItem2 = new OrderItem("i2", 'OrderItem 2', 200, "p2", 2);

        const order1 = new Order("1", "c1", [orderItem1]);
        const order2 = new Order("2", "c2", [orderItem2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(500);
    })
});