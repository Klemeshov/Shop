import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import SearchIcon from "./../../../assets/img/Header/search.png"
import classes from "./SearchBar.module.css"
import {compose} from "redux";


class SearchBar extends React.Component {

    render() {
        return (
            <div className={classes.SearchBar}>
                <input
                    className={classes.Input}
                    onChange={this.props.onValueChange}
                    value={this.props.currentValue}
                    placeholder="Search"
                    onKeyPress={e => {
                        if (e.key === "Enter")
                            this.props.history.push("/search?value=" + this.props.currentValue);
                    }}/>
                <NavLink to={"/search?value=" + this.props.currentValue}>
                    <img className={classes.Img}
                         src={SearchIcon}
                         alt="search"/>
                </NavLink>
            </div>
        )
    }
}


export default compose(withRouter)(SearchBar);