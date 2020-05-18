import React from "react";
import Loader from "./Loader.svg"
import classes from "./Preloader.module.css"

class Preloader extends React.Component {

    state = {
        wait: false
    };

    render() {

        if (!this.state.wait) {
            setTimeout(()=>{this.setState({wait: true})}, 400);
            return <></>;
        }

        return (
            <div className={classes.Preloader}>
                <img className={classes.Preloader__img} src={Loader} alt='Loader'/>
            </div>
        )
    }
}

export default Preloader;