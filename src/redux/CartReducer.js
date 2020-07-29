import {CounterpartyAPI} from "../API/API";

const ADD_PRODUCT = "ADD_PRODUCT_CART_REDUCER";
const REMOVE_PRODUCT = "REMOVE_PRODUCT_CART_REDUCER";
const IS_COUNTERPARTY = "IS_COUNTERPARTY_CART_REDUCER";

let initialState = {
    products: [],
    size: 0,
    isCounterparty: "uncheck"
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (state.products.find(product => product.code === action.product.code)) {
                return {
                    ...state,
                        products: state.products.map(product => {
                        if (product.code === action.product.code)
                            return {
                                ...product,
                                count: product.count + 1
                            };
                        else
                            return product
                    }),
                    size: state.size + 1
                };
            } else {
                return {
                    ...state,
                    products: [{...action.product, count: 1}, ...state.products],
                    size: state.size + 1
                };
            }
        case REMOVE_PRODUCT:
            let newProducts = [];
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].code !== action.code)
                    newProducts.push(state.products[i]);
                else if (state.products[i].count > 1)
                    newProducts.push({
                        ...state.products[i],
                        count: state.products[i].count - 1
                    });
            }
            return {
                ...state,
                products: newProducts,
                size: state.size - 1
            };
        case IS_COUNTERPARTY:
            return {
                ...state,
                isCounterparty: action.isCounterparty
            };
        default:
            return state;

    }
};

export const addProductToCart = (product) => ({type: ADD_PRODUCT, product});
export const removeProductFromCart = (code) => ({type: REMOVE_PRODUCT, code});

const setCounterparty = (isCounterparty) => ({type: IS_COUNTERPARTY, isCounterparty});
export const isCounterpartyCheck = (name, phone, email) => async (dispatch) => {
    dispatch(setCounterparty("wait"));

    let data = await CounterpartyAPI.checkCounterparty(name, phone, email);
    if (data.size > 0) {
        dispatch(setCounterparty(data.counterpartys[0].meta.href));
    } else {
        dispatch(createCounterparty(name, phone, email));
    }
};

const createCounterparty = (name, phone, email) => async (dispatch) => {
    let data = await CounterpartyAPI.createCounterparty(name, phone, email);
    dispatch(setCounterparty(data.meta.href));
};


export default CartReducer;