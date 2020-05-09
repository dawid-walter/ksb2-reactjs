import React from "react";
import './App.css';
import CarList from "./CarList";
import CarForm from "./CarForm";

class App extends React.Component {


    render() {
        return (
            <div>
                <div className="Car-list">
                    <CarList/>
                </div>
                <div className="Car-form">
                    <CarForm/>
                </div>
            </div>
        );
    }
}

export default App;
