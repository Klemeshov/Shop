import React from "react";
import classes from "./DefaultPage.module.css"

const Product = (props) => {
    return (
        <div>
            {props.info.name}
        </div>
    )
};

const DefaultPage = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {props.products.map(p => <Product info={p}/>)}
            </div>
            <div>
                {pages.map(p =>
                    <span
                        onClick={props.changePage(p)}
                        className={props.page === p
                            ?classes.page + ' '+ classes.currentPage
                            :classes.page}>
                        {p + 1}
                    </span>)}
            </div>
        </div>
    )
};

export default DefaultPage;