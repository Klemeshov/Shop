import {authAPI} from "../API/API";

const SET_AUTH = "SET_AUTH_AUTH_REDUCER";

let initialState = {
    auth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.auth
            };
        default:
            return state;
    }
};

export const setAuth = (auth) => ({type: SET_AUTH, auth});

export const Auth = () => async (dispatch) => {

    authAPI.auth().then(response=>{
        dispatch(setAuth(true));
    }, err=> {
        console.log("err: " + err)
    });
};

export default authReducer;