import React, { Component } from 'react';
import Button from './button.jsx';
import './Main.css';

const TextInput = props => {
    return (
      <div>
        <input
          type="text"
          value={props.value}
          onChange={event => console.log("value changed!")}
        />
      </div>
    );
  };


class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Main">
                <p className="text">Enter a start location and destination to get the carbon emissions from the determined driving route.</p>
                <label className="textBoxLabel">
                    Start Location
                    <TextInput />
                </label>
                <br />
                <label className="textBoxLabel">
                    Destination
                    <TextInput />
                </label>
                <br />
                <Button>Calculate!</Button>
                <br />
                <p className="text">Route emissions (kg CO2):</p>
            </div>
        );
    }
}

export default Main;