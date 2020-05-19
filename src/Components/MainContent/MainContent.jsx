import React from "react";
import DefaultPage from "../DefaultPage/DefaultPageContainer";
import {Route} from "react-router-dom";
import SearchPageContainer from "../SearchPage/SearchPageContainer";

const MainContent = (props) => {
    return (
        <div>
            <Route exact path='/'
                   render={() => <DefaultPage/>}/>
            <Route path='/search'
                   render={() => <SearchPageContainer/>}/>
        </div>
    )
};

export default MainContent