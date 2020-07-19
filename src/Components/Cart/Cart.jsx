import React from "react";
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {addProductToCart, removeProductFromCart} from "../../redux/CartReducer";
import Counterparty from "./Counterparty/Counterparty";
import classes from "./Cart.module.css"

class Cart extends React.Component {
    render() {
        let price = 0;
        for (let u = 0; u < this.props.products.length; u++) {
            price += this.props.products[u].count * this.props.products[u].salePrices[0].value / 100
        }
        return (
            <div className={classes.CartContent}>
                <div>
                    <div className={classes.OrderInscription}>
                        <h4>Оформить заказ:</h4>
                    </div>
                    {this.props.size > 0
                        ? this.props.products.map(product =>
                            <CartItem
                                info={product}
                                addProduct={this.props.addOneProduct}
                                removeProduct={this.props.removeOneProduct}/>)
                        :<div className={classes.CartInscription}> Корзина пуста</div>
                    }
                </div>
                <div className={classes.Counterparty}>
                    <div className={classes.Price}>
                        <h5>
                            Общая стоймость: {price} руб.
                        </h5>
                    </div>
                    <Counterparty/>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    products: state.cart.products,
    size: state.cart.size
});

export default connect(mapStateToProps, {
    addOneProduct: addProductToCart,
    removeOneProduct: removeProductFromCart
})(Cart);