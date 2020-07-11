import {ProductsAPI} from "../API/API";

const ADD_PRODUCT = "ADD_PRODUCT_CART_REDUCER";

let initialState = {
    products: [],
    size: 0
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.product, ...state.products],
                size: state.size+1
            };
        default:
            return state
    }
};

export default CartReducer;