import React from "react";
import Product from "../Product/Product";
import classes from "./ShowProducts.module.css";


const Paginator = (props) =>{
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i);
    }

    return(
        <div className={classes.paginatorContainer}>
            <div className={classes.paginator}>
                {pages.length > 1 &&
                pages.map(p =>
                    <span
                        onClick={()=>{props.changePage(p)}}
                        className={props.page === p
                            ? classes.page + ' ' + classes.currentPage
                            : classes.page}
                        key={p}>
                            {p + 1}
                        </span>)
                }
            </div>
        </div>
    )
}


const ShowProducts = (props) => {
    return (
        <div>
            <Paginator {...props}/>
            <div>
                {props.products.length !== 0
                    ? props.products.map(p => <Product info={p} key={p.code}/>)
                    : "Ничего нет"
                }
            </div>
           <Paginator {...props}/>
        </div>
    )
};

export default ShowProducts;