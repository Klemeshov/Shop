import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {Auth} from "./redux/AuthReducer";
import TestComponent from "./Components/TestComponent";

class App extends React.Component {
    componentDidMount() {
        this.props.Auth()
    }

    render() {
        return (
            <div className="App">
                <TestComponent/>
            </div>
        );
    }
}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, {Auth})(App);