import React from "react";
import DefaultPage from "../DefaultPage/DefaultPageContainer";
import {Route} from "react-router-dom";
import FindPage from "../FindPage/FindPageContainer";

const MainContent = (props) => {
    return (
        <div>
            <Route exact path='/'
                   render={() => <DefaultPage/>}/>
            <Route path='/search'
                   render={() => <FindPage/>}/>
        </div>
    )
};

export default MainContent