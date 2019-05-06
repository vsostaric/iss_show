import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import IssDashboardContainer from "./containers/iss.dashboard.container";
import MeteorDataContainer from "./containers/meteor.data.container";
import Card from "react-bootstrap/Card";

function App() {
    return (
        <div className="App">
            <h1>ISS Dashboard</h1>
            <Card>
                <Card.Body>
                    <IssDashboardContainer/>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <MeteorDataContainer/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;
