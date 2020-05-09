import React from "react";
import axios from 'axios';
import './CarList.css';

export default class CarList extends React.Component {
    state = {
        cars: [],
    }

    componentDidMount() {
        axios.get('https://teai-homework3.herokuapp.com/cars')
            .then(res => {
                console.log(res)
                const cars = res.data.content;
                this.setState({cars});
            })
    }

    render() {
        return (
            <div className="ShowCars">
                <ul>
                    {this.state.cars.map(car =>
                        <li>Id: {car.id}<br/>
                            Make: {car.make}<br/>
                            Model: {car.model} <br/>
                            Colour: {car.colour}</li>
                    )}
                </ul>
            </div>
        );
    }
}
