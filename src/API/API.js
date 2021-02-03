import * as axios from "axios"

const URL = 'https://web-server-for-shop.herokuapp.com/';
// const URL = "http://localhost:5000";

const ms = axios.create({
    baseURL: URL
});

export const ProductsAPI = {
    getProducts(limit = 10, offset = 0, search = "", order="name"){
        return ms.get(`/report/stock/all`, {params: {limit, offset, search, order}}).then(res=>res.data)
    }
};

export const  CounterpartyAPI = {
    checkCounterparty(name, phone, email){
        return ms.get('/entity/counterparty', {params: {name, phone, email}}).then(res=>res.data)
    },
    createCounterparty(name, phone, email){
        return ms.post('/entity/counterparty', {name, phone, email}).then(res=>res.data)
    }
};