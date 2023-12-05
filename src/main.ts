import OrderItem from "./entity/order_item";
import Order from "./entity/order";


let customer = new Customer("123", "Wesley Williams");

const address = new AddressVO("123 Main St", 2, "São Paulo", "SP");
customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);

const order = new Order("1", customer.id, [item1, item2]);