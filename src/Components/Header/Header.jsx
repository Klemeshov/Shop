import React from "react";
import classes from "./Header.module.css"
import SearchBar from "./SearchBar/SearchBar";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.Header}>
            <NavLink to="/"> HOME </NavLink>
            <SearchBar/>
        </header>
    )
};

export default Header;