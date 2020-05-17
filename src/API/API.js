import * as moysklad from "moysklad";
//import * as fetch from "node-fetch";
require("isomorphic-fetch");

const login = "admin@dima-0510";
const password = "Lama1200";
const ms = moysklad({login,
                            password,
                            });
console.log(ms.getOptions());

export const authAPI = {
    auth() {
        return ms.GET(`/entity/product`,{limit:1})
    }
};
