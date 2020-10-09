import {ProductsAPI} from "../API/API";

const GET_PRODUCTS = "GET_PRODUCTS_PRODUCTS_REDUCER";
const SET_FETCHING = "SET_FETCHING_PRODUCTS_REDUCER";
const CHANGE_PAGE = "CHANGE_PAGE_PRODUCTS_REDUCER";
const CHANGE_SORT = "CHANGE_SORT_PRODUCTS_REDUCER";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE_PRODUCTS_REDUCER";

let initialState = {
    searchValue: "",
    products: [],
    size: null,
    isFetching: false,
    sorted: "name",
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
        case CHANGE_SORT:
            return {
                ...state,
                sorted: action.sorted
            };
        default:
            return state
    }
};

const setProducts = (products, size) => ({type: GET_PRODUCTS, products, size});
const setFetching = (fetch) => ({type: SET_FETCHING, fetch});
const getProducts = (limit, offset) => async (dispatch, getState) => {
    dispatch(setFetching(true));
    window.scrollTo(0, 0);
    const {searchValue, sorted} = getState().products;
    let data = await ProductsAPI.getProducts(limit, offset, searchValue, sorted);

    dispatch(setProducts(data.products, data.size));
    dispatch(setFetching(false));
};

const setPage = (page) => ({type: CHANGE_PAGE, page});
export const changePage = (page) => async (dispatch) => {
    dispatch(setPage(page));
    dispatch(getProducts(10, 10 * page));
};

const setSort = (sorted) => ({type: CHANGE_SORT, sorted});
export const changeSort = (sorted) => async (dispatch) => {
    dispatch(setSort(sorted));
    dispatch(setPage(0));
    dispatch(getProducts(10, 0))
};

const setSearchValue = (searchValue) => ({type: SET_SEARCH_VALUE, searchValue});
export const changeSearchValue = (searchValue) => async (dispatch) => {
    dispatch(setSearchValue(searchValue));
    dispatch(setPage(0));
    dispatch(setSort("name"));
    dispatch(getProducts(10, 0))
};

export default ProductsReducer;
