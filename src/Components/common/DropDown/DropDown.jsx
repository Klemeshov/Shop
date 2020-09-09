import React from "react";
import classes from "./DropDown.module.css"


// Name, children, nameClassName, contentClassName
class DropDown extends React.Component {

    state = {
        exact: false
    };

    changeExact = () => {
        if (this.state.exact)
            this.setState({exact: false});
        else
            this.setState({exact: true})
    };

    render() {
        return (
            <div className={classes.dropDown}>
                <button className={this.props.nameClassName
                                    + ' ' + classes.name}
                        onClick={this.changeExact}>
                    {this.props.name}
                </button>
                {
                    !this.state.exact ||
                    <div className={this.props.contentClassName
                                    +' '+ classes.content}>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
}

export default DropDown;