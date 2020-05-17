import React from "react";
import {connect} from "react-redux";

const TestComponent = (props) => {
    return (
        <div>
            {props.auth?"Yes":"No"}
        </div>
    )
};

const mapStateToProps = (state) => ({
    auth: state.authInfo.auth
});

export default connect(mapStateToProps, [])(TestComponent)