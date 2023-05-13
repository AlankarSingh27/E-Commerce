import axios from 'axios';
import {UserView} from "../models/UserView";
import {AddressView} from "../models/AddressView";

export class UserService {
    private static serverUrl: string = process.env.REACT_APP_EXPRESS_SERVER_URL ? process.env.REACT_APP_EXPRESS_SERVER_URL : "";

    /**
     * @usage : Register a User
     * @url : http://localhost:9000/api/users/register
     * @params : username , email , password
     * @method : POST
     * @access : PUBLIC
     */
    public static registerUser(user: UserView): Promise<{ data: { data: null, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/users/register`;
        return axios.post(dataUrl, user);
    }

    /**
     * @usage : Login a User
     * @url : http://localhost:9000/api/users/login
     * @params : email , password
     * @method : POST
     * @access : PUBLIC
     */
    public static loginUser(user: UserView): Promise<{ data: { data: UserView, msg: string, token: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/users/login`;
        return axios.post(dataUrl, user);
    }

    /**
     *  @usage : get users Data
     *  @url : http://localhost:9000/api/users/me
     *  @method : GET
     *  @access : PRIVATE
     * @param : no-params
     */
    public static getUserData(): Promise<{ data: { data: UserView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/users/me`;
        return axios.get(dataUrl);
    }

    /**
     * @usage : update profile Picture
     * @url : http://localhost:9000/api/users/profile
     * @params : imageUrl
     * @method : POST
     * @access : PRIVATE
     */
    public static updateProfilePicture(imageUrl: string): Promise<{ data: { data: UserView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/users/profile`;
        return axios.post(dataUrl, {imageUrl: imageUrl});
    }

    /**
     * @usage : change the password
     * @url : http://localhost:9000/api/users/change-password
     * @params : password
     * @method : POST
     * @access : PRIVATE
     */
    public static changePassword(password: string): Promise<{ data: { data: UserView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/users/change-password`;
        return axios.post(dataUrl, {password: password});
    }

    /**
     * @usage : Create New Address
     * @url : http://localhost:9000/api/addresses/new
     * @params : mobile,flat,landmark,street,city,state,country,pinCode
     * @method : POST
     * @access : PRIVATE
     */
    public static createNewAddress(address: AddressView): Promise<{ data: { data: AddressView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/addresses/new`;
        return axios.post(dataUrl, address);
    }

    /**
     * @usage : Update Address
     * @url : http://localhost:9000/api/addresses/:addressId
     * @params : mobile,flat,landmark,street,city,state,country,pinCode
     * @method : PUT
     * @access : PRIVATE
     */
    public static updateAddress(address: AddressView, addressId: string): Promise<{ data: { data: AddressView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/addresses/${addressId}`;
        return axios.put(dataUrl, address);
    }

    /**
     * @usage : Get Address
     * @url : http://localhost:9000/api/addresses/me
     * @params : no-params
     * @method : GET
     * @access : PRIVATE
     */
    public static getAddressInfo(): Promise<{ data: { data: AddressView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/addresses/me`;
        return axios.get(dataUrl);
    }

    /**
     * @usage : Delete Address
     * @url : http://localhost:9000/api/addresses/:addressId
     * @params : no-params
     * @method : DELETE
     * @access : PRIVATE
     */
    public static deleteAddress(addressId: string): Promise<{ data: { data: AddressView, msg: string, status: string } }> {
        const dataUrl: string = `${this.serverUrl}/api/addresses/${addressId}`;
        return axios.delete(dataUrl);
    }
}