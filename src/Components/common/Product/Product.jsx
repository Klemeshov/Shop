import React from "react";
import default_img from "./../../../assets/img/products/default_photo.jpg";
import classes from "./Product.module.css"
import {connect} from "react-redux";
import {addProductToCart} from "../../../redux/CartReducer";

const Product = (props) => {
    return (
        <div className={classes.Product}>
            <div>
                <img className={classes.Photo} src={default_img} alt="Фото продукта"/>
            </div>
            <div>
                <div className={classes.Info}>
                    <h4>{props.info.name}</h4>
                    Колличество - {props.info.quantity} шт.<p/>
                    {Number(props.info.salePrice) / 100} руб.
                </div>
                <button className={classes.Button} onClick={()=>{
                    props.addToCart(props.info);
                }}> Добавить в корзину </button>
            </div>
        </div>
    )
};

export default connect((state)=>({}), {addToCart:addProductToCart})(Product);
