import {
    Table,
    Model,
    Column,
    PrimaryKey, ForeignKey, BelongsTo
} from 'sequelize-typescript';
import CustomerModel from "../customer/customer.model";
import Product from "../../../../../domain/entity/product/product";
import ProductModel from "../product/product.model";
import OrderModel from "./order.model";

@Table({
    tableName: 'orders',
    timestamps: false
})
export default class OrderItemModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => ProductModel)
    @Column({ allowNull: false })
    declare product_id: string;

    @BelongsTo(() => ProductModel)
    declare customer: ProductModel;

    @ForeignKey(() => OrderModel)
    declare order_id: string;

    @Column({ allowNull: false })
    declare total: number;

    @Column({ allowNull: false })
    declare quantity: number;

    @Column({ allowNull: false })
    declare name: string;
}
