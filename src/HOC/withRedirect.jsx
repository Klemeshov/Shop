import React from "react";
import {Redirect} from "react-router-dom";

const withRedirect = (Component) => {
    return class Test extends React.Component {
        state = {
            isRedirect: false,
            path:""
        };

        submit = (path) => () => {
            this.setState({isRedirect: true,
                path})
        };


        render() {
            if (this.state.isRedirect) return <>
                    <Redirect to={this.state.path}/>
                    <Component{...this.props} submit={this.submit}/>
                </>;
            return (
                <Component{...this.props} submit={this.submit}/>
            )
        }
    }
};

export default withRedirect;