import React from "react";
import axios from 'axios';
import './CarForm.css';

class CarForm extends React.Component {
    state = {
        id: '',
        make: '',
        model: '',
        colour: ''
    }

    makeHandleChange = event => {
        this.setState({make: event.target.value});

    }
    modelHandleChange = event => {
        this.setState({model: event.target.value});

    }
    colourHandleChange = event => {
        this.setState({colour: event.target.value});

    }
    idHandleChange = event => {
        this.setState({id: event.target.value});
    }

    handleSubmit = event => {
        axios.post(`https://teai-homework3.herokuapp.com/cars`, {
            id: this.state.id,
            make: this.state.make,
            model: this.state.model,
            colour: this.state.colour.toUpperCase()
        })
            .then(res => {
                console.log(res);
            })
    }
    handleDeleteSubmit = event => {
        axios.delete(`https://teai-homework3.herokuapp.com/cars/${this.state.id}`)
            .then(res => {
                console.log(res);
            })
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="form-style-5">
                    <label>
                        Car id:
                        <input type="text" name="make" onChange={this.idHandleChange}/>
                    </label><br/>
                    <label>
                        Car make:
                        <input type="text" name="make" onChange={this.makeHandleChange}/>
                    </label><br/>
                    <label>
                        Car model:
                        <input type="text" name="model" onChange={this.modelHandleChange}/>
                    </label><br/>
                    <label>
                        Car colour:
                        <input type="text" name="colour" onChange={this.colourHandleChange}/>
                    </label><br/>
                    <button type="submit">Add car</button>
                    <br/><br/>
                    <label>
                        Car id:
                        <input type="text" name="id" onChange={this.idHandleChange}/>
                    </label><br/>
                    <button type="button" onClick={this.handleDeleteSubmit}>Remove car</button>
                </form>
            </div>
        )
    }
}

export default CarForm;
