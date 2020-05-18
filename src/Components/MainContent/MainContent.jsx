import React from "react";
import DefaultPage from "../DefaultPage/DefaultPageContainer";
import {Route} from "react-router-dom";

const MainContent = (props) => {
    return(
        <div>
            <Route path='/'
                   render={() => <DefaultPage/>}/>
        </div>
    )
};

export default MainContent