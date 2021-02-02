import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Preloader from "./Components/common/Preloader/Preloader";
const MainContent = React.lazy(() => import("./Components/MainContent/MainContent"));

class App extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="MainContent">
                    <div className="Head">шапка</div>
                    <React.Suspense fallback={<Preloader/>}>
                        <MainContent/>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

export default App;