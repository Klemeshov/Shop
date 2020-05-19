import * as moysklad from "moysklad";
// import fetch from 'node-fetch';
// import * as axios from "axios"
//
// const ms = axios.create({
//     baseURL: 'http://127.0.0.1:5000/'
// });
//
//
// export const ProductsAPI = {
//     getProducts(limit, offset){
//         return ms.get(`/entity/product`, {params: {limit, offset}}).then(res=>res.data)
//     }
// };


const login = "admin@dima-0510";
const password = "794cdc36689b";
const ms = moysklad({
    login,
    password
});

export const ProductsAPI = {
    getProducts(limit, offset){
        return ms.GET("entity/product", {limit, offset}).then(require=>{
            const answer = {};
            answer.products = require.rows;
            answer.size = require.meta.size;
            return answer
        });
    }
};
