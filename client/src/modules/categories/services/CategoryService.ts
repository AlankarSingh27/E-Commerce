import axios from "axios";
import {CategoryRequestView} from "../models/CategoryRequestView";
import {CategoryResponseView} from "../models/CategoryResponseView";

export class CategoryService {
    private static serverUrl: string = process.env.REACT_APP_EXPRESS_SERVER_URL ? process.env.REACT_APP_EXPRESS_SERVER_URL : "";

    /**
     * @usage : Create a Category
     * @url : http://localhost:9000/api/categories/
     * @params : name, description
     * @method : POST
     * @access : PRIVATE
     */
    public static createCategory(category: CategoryRequestView): Promise<{ data: { data: CategoryResponseView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/categories/`;
        return axios.post(dataUrl, category);
    }


    /**
     * @usage : Create a Sub Category
     * @url : http://localhost:9000/api/categories/:categoryId
     * @params : name, description
     * @method : POST
     * @access : PRIVATE
     */
    public static createSubCategory(category: CategoryRequestView, categoryId: string): Promise<{ data: { data: CategoryResponseView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/categories/${categoryId}`;
        return axios.post(dataUrl, category);
    }

    /**
     * @usage : Get all categories
     * @url : http://localhost:9000/api/categories/
     * @params : no-params
     * @method : GET
     * @access : PUBLIC
     */
    public static getAllCategories(): Promise<{ data: { data: CategoryResponseView[], msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/categories/`;
        return axios.get(dataUrl);
    }
}