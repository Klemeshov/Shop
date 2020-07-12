import React from "react";
import classes from "./Header.module.css"
import SearchBar from "./SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import Cart from "./Cart/CartIcon";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.HoneContainer}>
                <NavLink className={classes.Home} to="/"> HOME </NavLink>
            </div>
            <SearchBar/>
            <Cart/>
        </header>
    )
};

export default Header;