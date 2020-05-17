import * as moysklad from "moysklad";
import fetch from 'node-fetch';
import * as axios from "axios"


const ms = axios.create({
    baseURL: 'http://localhost:5000/'
});

export const authAPI = {
    auth() {
        return ms.get(`entity/product`,{limit:1}).then(res=>res.data)
    }
};
