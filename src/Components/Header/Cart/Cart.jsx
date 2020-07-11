import React from "react";
import {connect} from "react-redux";
import CartImg from "./../../../assets/img/Header/Cart.png"
import {NavLink} from "react-router-dom";

const Cart = (props) => {
    return (
        <NavLink to={"/cart"}>
            {props.size}
            <img src={CartImg} alt="cart" height="50"/>
        </NavLink>
    )
};


const mapStateToProps = (state) => ({
    size: state.cart.size
});

export default connect(mapStateToProps, {})(Cart);