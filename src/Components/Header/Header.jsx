import React from "react";
import classes from "./Header.module.css"
import SearchBar from "./SearchBar/SearchBar";
import {NavLink} from "react-router-dom";
import CartIcon from "./Cart/CartIcon";

class Header extends React.Component {

    state = {
        currentValue: ""
    };

    onValueChange = (e) => {
        this.setState({currentValue: e.currentTarget.value})
    };

    cleanValue = () => {
        this.setState({currentValue:""})
    };

    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.HoneContainer} onClick={this.cleanValue}>
                    <NavLink className={classes.Home} to="/"> HOME </NavLink>
                </div>
                <SearchBar currentValue={this.state.currentValue} onValueChange={this.onValueChange}/>
                <CartIcon cleanValue={this.cleanValue.bind(this)}/>
            </header>
        )
    }
}

export default Header;