import React from "react";
import {NavLink} from "react-router-dom";

class SearchBar extends React.Component {

    state = {
        currentValue: ""
    };

    onValueChange = (e) => {
        this.setState({currentValue: e.currentTarget.value})
    };

    render() {
        return (
            <div>
                <input onChange={this.onValueChange} value={this.state.currentValue}/>
                <NavLink to={"/search?value=" + this.state.currentValue}>
                    search
                </NavLink>
            </div>
        )
    }
}

export default SearchBar;