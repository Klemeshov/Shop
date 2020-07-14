import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import SearchIcon from "./../../../assets/img/Header/search.png"
import classes from "./SearchBar.module.css"


class SearchBar extends React.Component {

    state = {
        currentValue: ""
    };

    onValueChange = (e) => {
        this.setState({currentValue: e.currentTarget.value})
    };

    render() {
        return (
            <div className={classes.SearchBar}>
                <input
                    className={classes.Input}
                    onChange={this.onValueChange}
                    value={this.state.currentValue}
                    placeholder="Search"
                    onKeyPress={e => {
                        if (e.key === "Enter")
                            this.props.history.push("/search?value=" + this.state.currentValue);
                    }}/>
                <NavLink to={"/search?value=" + this.state.currentValue}>
                    <img className={classes.Img} src={SearchIcon} alt="search"/>
                </NavLink>
            </div>
        )
    }
}


export default withRouter(SearchBar);