import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
            <div className="Header">
                <h1>EcoMap<i className="fas fa-leaf"></i></h1>
            </div>
         );
    }
}
 
export default Header;