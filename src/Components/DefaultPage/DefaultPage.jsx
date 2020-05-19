import React from "react";
import classes from "./DefaultPage.module.css"
import Product from "../common/Product/Product";

const DefaultPage = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {props.products.map(p => <Product info={p} key={p.id}/>)}
            </div>
            <div>
                {pages.map(p =>
                    <span
                        onClick={props.changePage(p)}
                        className={props.page === p
                            ?classes.page + ' '+ classes.currentPage
                            :classes.page}
                        key={p}>
                        {p + 1}
                    </span>)}
            </div>
        </div>
    )
};

export default DefaultPage;