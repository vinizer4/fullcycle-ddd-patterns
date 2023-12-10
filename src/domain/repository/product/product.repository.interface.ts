import RepositoryInterface from "../repository.interface";
import Product from "../../entity/product/product";

export default interface ProductRepositoryInterface
    extends RepositoryInterface<Product> {
}