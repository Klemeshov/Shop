import React from "react";
import {connect} from "react-redux";
import CartImg from "./../../../assets/img/Header/Cart.png"
import {NavLink} from "react-router-dom";
import classes from "./CartIcon.module.css"

const CartIcon = (props) => {
    return (
        <NavLink to={"/cart"}>
            {props.size}
            <img className={classes.CartImg} src={CartImg} alt="cart"/>
        </NavLink>
    )
};


const mapStateToProps = (state) => ({
    size: state.cart.size
});

export default connect(mapStateToProps, {})(CartIcon);