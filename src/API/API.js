import * as axios from "axios"

const ms = axios.create({
    baseURL: 'https://web-server-for-shop.herokuapp.com/'
});


export const ProductsAPI = {
    getProducts(limit, offset){
        return ms.get(`/entity/product`, {params: {limit, offset}}).then(res=>res.data)
    }
};
