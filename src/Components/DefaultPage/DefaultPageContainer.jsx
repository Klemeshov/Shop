import React from "react";
import {connect} from "react-redux";
import {changePage, getProducts} from "../../redux/ProductsReducer";
import DefaultPage from "./DefaultPage"
import Preloader from "../common/Preloader/Preloader";

class DefaultPageContainer extends React.Component {

    componentDidMount() {
        this.props.getProducts(10, 0);
    }

    changePage = (page) => () => {
        this.props.getProducts(10, page * 10);
        this.props.changePage(page)
    };

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>

                    : <DefaultPage
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
    products: state.products.products,
    size: state.products.size,
    isFetching: state.products.isFetching,
    page: state.products.page
});


export default connect(mapStateToProps, {getProducts, changePage})(DefaultPageContainer);