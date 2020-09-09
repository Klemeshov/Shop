import {ProductsAPI} from "../API/API";

const GET_PRODUCTS = "GET_PRODUCTS_PRODUCTS_REDUCER";
const SET_FETCHING = "SET_FETCHING_PRODUCTS_REDUCER";
const CHANGE_PAGE = "CHANGE_PAGE_PRODUCTS_REDUCER";

let initialState = {
    products: [],
    size: null,
    isFetching: false,
    order: null,
    page: 0
};

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                size: action.size
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.fetch
            };
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            };
        default:
            return state
    }
};

const setProducts = (products, size) =>({type: GET_PRODUCTS, products, size});
export const getProducts = (limit, offset) => async (dispatch)=>{
    dispatch(setFetching(true));

    let data = await ProductsAPI.getProducts(limit, offset);

    dispatch(setProducts(data.products, data.size));
    dispatch(setFetching(false));
};

const setFetching = (fetch) => ({type: SET_FETCHING, fetch});
export const changePage = (page) => ({type: CHANGE_PAGE, page});

export default ProductsReducer;