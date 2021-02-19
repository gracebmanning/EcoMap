import React, { Component } from 'react';
import Button from './button.jsx';
import './Main.css';
import SearchBox from './SearchBox.jsx';

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
                <p>This is where the bulk of our content will go.</p>
                <label>
                    Start Location
                    <TextInput />
                </label>
                <br />
                <label>
                    Destination
                    <TextInput />
                </label>

                <Button>Start</Button>
            </div>
        );
    }
}

export default Main;