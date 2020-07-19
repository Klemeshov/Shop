import React from "react";
import default_img from "../../assets/img/products/default_photo.jpg";
import classes from "./CartItem.module.css"

const CartItem = (props) => {
    return (
        <div className={classes.Product}>
            <div>
                <img className={classes.Photo} src={default_img} alt="Фото продукта"/>
            </div>
            <div>
                <div className={classes.Info}>
                    <h4>{props.info.name}</h4>
                    Колличество - {props.info.volume} шт.<p/>
                    {Number(props.info.salePrices[0].value) / 100} руб.
                </div>
                <div className={classes.CountContainer}>
                    <button onClick={()=>{props.removeProduct(props.info.id)}}>-</button>
                    <div className={classes.Count}>{props.info.count}</div>
                    <button onClick={()=>{props.addProduct(props.info)}}>+</button>
                </div>
                <p/>
                <div className={classes.Info}>
                    стоймость:  {props.info.count * props.info.salePrices[0].value / 100} руб.
                </div>
            </div>
        </div>
    )
};

export default CartItem;