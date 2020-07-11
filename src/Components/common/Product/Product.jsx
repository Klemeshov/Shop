import React from "react";
import default_img from "./../../../assets/img/products/default_photo.jpg";
import classes from "./Product.module.css"

const Product = (props) => {
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
                <button className={classes.Button} onClick={props.addToCard}> Добавить в корзину </button>
            </div>
        </div>
    )
};

export default Product