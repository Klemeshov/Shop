import React from "react";
import Product from "../Product/Product";
import classes from "./Paginator.module.css";
import cl from "./ShowProducts.module.css"


const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    let pc = 15;
    if (pageCount > pc) {
        if (pageCount - props.page > pc)
            for (let i = props.page; i < props.page + pc; i++)
                pages.push(i)
        else
            for (let i = pageCount - pc; i < pageCount; i++)
                pages.push(i)
    } else
        for (let i = 0; i < pageCount; i++)
            pages.push(i);

    return (
        <div className={classes.paginatorContainer}>
            {pages.length > 1 &&
            <div className={classes.paginator}>

                {/*Двойная стрелка влево*/}
                {props.page !== 0 &&
                <span className={classes.page}
                      onClick={() => {
                          props.changePage(0)
                      }}> &larr;&larr; </span>}

                {/*Стрелка влево*/}
                {props.page !== 0 &&
                <span className={classes.page}
                      onClick={() => {
                          props.changePage(props.page - 1)
                      }}> &larr; </span>}

                {/*Три точки слева*/}
                {pages[0] !== 0 &&
                <span className={classes.page}
                      onClick={() => {
                          props.changePage(pages[0] - pc >= 0 ? pages[0] - pc : 0)
                      }}>...</span>}

                {/*Цифры*/}
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

                {/*Три точки справа*/}
                {pages[0] < pageCount - pc &&
                <span className={classes.page}
                      onClick={() => {props.changePage(pages[0] + pc)}}>...</span>}

                {/*Стрелка вправо*/}
                {props.page !== pageCount - 1 &&
                <span className={classes.page}
                      onClick={() => {
                          props.changePage(props.page + 1)
                      }}> &rarr; </span>}

                {/*Двойная стрелка вправо*/}
                {props.page !== pageCount - 1 &&
                <span className={classes.page}
                      onClick={() => {
                          props.changePage(pageCount - 1)
                      }}> &rarr;&rarr; </span>}
            </div>
            }
        </div>
    )
}


const ShowProducts = (props) => {
    return (
        <div>
            <div className={cl.FindTotalCount}>
                <h3>Найдено: {props.totalCount} {props.totalCount === 1 ? "товар" : "товара"}</h3>
            </div>
            {props.products.length >= 2 &&
            <div className={cl.SortPanel}>
                <span className={cl.SortPrediction}>Сортировать по:</span>
                <span className={props.sorted === "salePrice" ? cl.CurrentSortItem : cl.SortItem}
                      onClick={() => {
                          props.changeSort("salePrice")
                      }}>
                    Цене
                </span>
                <span className={props.sorted === "name" ? cl.CurrentSortItem : cl.SortItem}
                      onClick={() => {
                          props.changeSort("name")
                      }}>
                    Имени
                </span>
            </div>
            }
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
}

export default ShowProducts;