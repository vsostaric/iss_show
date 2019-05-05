import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IssDashboardContainer from "./containers/iss.dashboard.container";
import MeteorDataContainer from "./containers/meteor.data.container";

function App() {
    return (
        <div className="App">
            <IssDashboardContainer/>
            <MeteorDataContainer/>
        </div>
    );
}

export default App;
