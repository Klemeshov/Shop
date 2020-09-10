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
                    Колличество - {props.info.quantity} шт.<p/>
                    {Number(props.info.salePrice) / 100} руб.
                </div>
                <div className={classes.CountContainer}>
                    <button onClick={()=>{props.removeProduct(props.info.code)}} className={classes.Button}>-</button>
                    <div className={classes.Count}>{props.info.count}</div>
                    <button onClick={()=>{props.addProduct(props.info)}} className={classes.Button}>+</button>
                </div>
                <p/>
                <div className={classes.Info}>
                    стоймость:  {props.info.count * props.info.salePrice / 100} руб.
                </div>
            </div>
        </div>
    )
};

export default CartItem;