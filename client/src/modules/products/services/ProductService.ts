import axios from "axios";
import {ProductRequestView} from "../models/ProductRequestView";
import {ProductView} from "../models/ProductView";
import {ProductResponseView} from "../models/ProductResponseView";

export class ProductService {
    private static serverUrl: string = process.env.REACT_APP_EXPRESS_SERVER_URL ? process.env.REACT_APP_EXPRESS_SERVER_URL : "";

    /**
     * @usage : Create a Product
     * @url : http://localhost:9000/api/products/
     * @params : title, description, imageUrl, brand, price, quantity, categoryId, subCategoryId
     * @method : POST
     * @access : PRIVATE
     */
    public static createProduct(product: ProductRequestView): Promise<{ data: { data: ProductView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products/`;
        return axios.post(dataUrl, product);
    }

    /**
     * @usage : Update a Product
     * @url : http://localhost:9000/api/products/:productId
     * @params : title, description, imageUrl, brand, price, quantity, categoryId, subCategoryId
     * @method : PUT
     * @access : PRIVATE
     */
    public static updateProduct(product: ProductRequestView, productId: string): Promise<{ data: { data: ProductView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products/${productId}`;
        return axios.put(dataUrl, product);
    }

    /**
     * @usage : Get all Products
     * @url : http://localhost:9000/api/products/
     * @params : no-params
     * @method : GET
     * @access : PRIVATE
     */
    public static getAllProducts(): Promise<{ data: { data: ProductResponseView[], msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products`;
        return axios.get(dataUrl);
    }

    /**
     * @usage : Get a Product
     * @url : http://localhost:9000/api/products/:productId
     * @params : no-params
     * @method : GET
     * @access : PRIVATE
     */
    public static getProduct(productId: string): Promise<{ data: { data: ProductResponseView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products/${productId}`;
        return axios.get(dataUrl);
    }

    /**
     * @usage : Delete a Product
     * @url : http://localhost:9000/api/products/:productId
     * @params : no-params
     * @method : DELETE
     * @access : PRIVATE
     */
    public static deleteProduct(productId: string): Promise<{ data: { data: ProductView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products/${productId}`;
        return axios.delete(dataUrl);
    }

    /**
     * @usage : Get all products with category Id
     * @url : http://localhost:9000/api/products/categories/:categoryId
     * @params : no-params
     * @method : GET
     * @access : PRIVATE
     */
    public static getAllProductsWithCategoryId(categoryId: string): Promise<{ data: { data: ProductResponseView[], msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/products/categories/${categoryId}`;
        return axios.get(dataUrl);
    }
}