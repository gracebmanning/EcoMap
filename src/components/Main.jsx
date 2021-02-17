import React, { Component } from 'react';
import Button from './button.jsx';
import './Main.css';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Main">
                <p>This is where the bulk of our content will go.</p>
                <Button>Start</Button>
            </div>
        );
    }
}
 
export default Main;