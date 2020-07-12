import React from "react";
import DefaultPage from "../DefaultPage/DefaultPageContainer";
import {Route} from "react-router-dom";
import SearchPageContainer from "../SearchPage/SearchPageContainer";
import Cart from "../Cart/Cart";
import classes from "./MainContent.module.css"

const MainContent = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Route exact path='/'
                       render={() => <DefaultPage/>}/>
                <Route path='/search'
                       render={() => <SearchPageContainer/>}/>
                <Route path='/cart'
                       render={() => <Cart/>}/>
            </div>
        </div>
    )
};

export default MainContent