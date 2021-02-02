import React from "react";
import Loader from "./Loader.svg"
import classes from "./Preloader.module.css"

class Preloader extends React.Component {

    render() {

        // if (!this.state.wait) {
        //     return <div className="empty"/>;
        // }

        return (
            <div className={classes.Preloader}>
                <img className={classes.Preloader__img} src={Loader} alt='Loader'/>
            </div>
        )
    }
}

export default Preloader;