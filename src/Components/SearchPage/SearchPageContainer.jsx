import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import ShowProducts from "../common/ShowProducts/ShowProducts";
import {changePage, changeSearchValue, changeSort} from "../../redux/ProductsReducer";


class SearchPageContainer extends React.PureComponent {
    state = {
        value: ""
    };

    componentDidMount() {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")});
        if (this.state.value !== "")
            this.props.changeSearchValue(this.state.value)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")});
        if (this.state.value !== prevState.value) {
            if (this.state.value !== "")
                this.props.changeSearchValue(this.state.value)
        }
    }

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
                        changePage={this.props.changePage}
                        sorted={this.props.sorted}
                        changeSort={this.props.changeSort}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    searchValue: state.products.searchValue,
    products: state.products.products,
    size: state.products.size,
    isFetching: state.products.isFetching,
    page: state.products.page,
    sorted: state.products.sorted
});


export default compose(
    connect(mapStateToProps, {changePage, changeSort, changeSearchValue}),
    withRouter
)(SearchPageContainer);