import React from "react";
import {connect} from "react-redux";
import {changePage, changeSort,changeSearchValue} from "../../redux/ProductsReducer";
import Preloader from "../common/Preloader/Preloader";
import ShowProducts from "../common/ShowProducts/ShowProducts";

class DefaultPageContainer extends React.Component {

    componentDidMount() {
        this.props.changeSearchValue("");
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>

                    : <ShowProducts
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
    products: state.products.products,
    size: state.products.size,
    isFetching: state.products.isFetching,
    page: state.products.page,
    sorted: state.products.sorted
});


export default connect(mapStateToProps, {changeSearchValue, changePage, changeSort})(DefaultPageContainer);