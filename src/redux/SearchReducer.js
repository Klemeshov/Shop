import {ProductsAPI} from "../API/API";

const SET_PRODUCTS = "SET_PRODUCTS_SEARCH_REDUCER";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE_SEARCH_REDUCER";
const SET_FETCHING = "SET_FETCHING_SEARCH_REDUCER";
const CHANGE_PAGE = "CHANGE_PAGE_SEARCH_REDUCER";

let initialState = {
    searchValue: null,
    products: [],
    size: null,
    isFetching: false,
    order: null,
    page: 0
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                size: action.size
            };
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
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
            return state;
    }
};

const setProducts = (products, size) =>({type:SET_PRODUCTS, products, size});
const setSearchValue = (searchValue) => ({type:SET_SEARCH_VALUE, searchValue});
const setFetching = (fetch) => ({type:SET_FETCHING, fetch});

export const getProductsAfterSearch = (limit, offset, value)=>async(dispatch)=>{
    dispatch(setFetching(true));
    dispatch(setSearchValue(value));

    let data = await ProductsAPI.getProducts(limit, offset, value);

    dispatch(setProducts(data.products, data.size));
    dispatch(setFetching(false));
};

export const changePage = (page) => ({type: CHANGE_PAGE, page});

export default SearchReducer;