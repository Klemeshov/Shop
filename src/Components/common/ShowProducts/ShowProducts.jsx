import React from "react";
import Product from "../Product/Product";
import classes from "./Paginator.module.css";
import DropDown from "../DropDown/DropDown";
import cl from "./ShowProducts.module.css"


const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={classes.paginatorContainer}>
            {pages.length > 1 &&
            <div className={classes.paginator}>
                {pages.map(p =>
                    <span
                        onClick={() => {
                            props.changePage(p)
                        }}
                        className={props.page === p
                            ? classes.page + ' ' + classes.currentPage
                            : classes.page}
                        key={p}>
                            {p + 1}
                        </span>)
                }
            </div>
            }
        </div>
    )
};


const ShowProducts = (props) => {
    return (
        <div>
            <div className={cl.FindTotalCount}>
                <h3>Найдено: {props.totalCount} {props.totalCount === 1 ? "товар" : "товара"}</h3>
            </div>
            <div className={cl.SortPanel}>
                Отсортировать по:
                <div className={cl.DropDown}>
                    <DropDown name="-----------">
                        <div>
                            <button>Цене</button>
                        </div>
                        <div>
                            <button>Имени</button>
                        </div>
                    </DropDown>
                </div>
            </div>
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