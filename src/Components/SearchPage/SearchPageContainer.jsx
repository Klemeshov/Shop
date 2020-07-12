import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {changePage, getProductsAfterSearch} from "../../redux/SearchReducer";
import Preloader from "../common/Preloader/Preloader";
import ShowProducts from "../common/ShowProducts/ShowProducts";


class SearchPageContainer extends React.PureComponent {
    state = {
        value: ""
    };

    componentDidMount() {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")})
        this.props.getProductsAfterSearch(10, 0, this.state.value)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")});
        if (this.state.value !== prevState.value) {
            this.props.getProductsAfterSearch(10, 0, this.state.value)
        }
    }

    changePage = (page) =>{
        this.props.getProductsAfterSearch(10, page * 10, this.state.value);
        this.props.changePage(page)
    };


    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <ShowProducts
                        searchValue={this.props.searchValue}
                        products={this.props.products}
                        totalCount={this.props.size}
                        pageSize={10}
                        page={this.props.page}
                        changePage={this.changePage.bind(this)}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.search.searchValue,
    products: state.search.products,
    size: state.search.size,
    isFetching: state.search.isFetching,
    page: state.search.page
});


export default compose(
    connect(mapStateToProps, {getProductsAfterSearch, changePage}),
    withRouter
)(SearchPageContainer);