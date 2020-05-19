// import * as moysklad from "moysklad";
// import fetch from 'node-fetch';
import * as axios from "axios"
import * as ip from "ip"

const ms = axios.create({
    baseURL: 'http://'+ip.address()+':5000/'
});


export const ProductsAPI = {
    getProducts(limit, offset){
        return ms.get(`/entity/product`, {params: {limit, offset}}).then(res=>res.data)
    }
};