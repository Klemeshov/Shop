import React from "react";
import {withRouter} from "react-router-dom";


class FindPageContainer extends React.PureComponent {
    componentDidMount() {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")})
    }
    state = {
        value: ""
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setState({value: new URLSearchParams(this.props.location.search).get("value")})
    }

    render() {
        return (
            <div>
                {this.state.value}
            </div>
        )
    }
}

export default withRouter(FindPageContainer);