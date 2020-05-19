import React from "react";

const Product = (props) => {
    return (
        <div>
            {props.info.name} - {props.info.volume} шт.   {Number(props.info.salePrices[0].value)/100} руб.
        </div>
    )
};
export default Product