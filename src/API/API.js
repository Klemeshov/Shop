import * as axios from "axios"

const URL = 'https://web-server-for-shop.herokuapp.com/';

const ms = axios.create({
    baseURL: URL
});


export const ProductsAPI = {
    getProducts(limit = 10, offset = 0, search = ""){
        return ms.get(`/entity/product`, {params: {limit, offset, search}}).then(res=>res.data)
    }
};
