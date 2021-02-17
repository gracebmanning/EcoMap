import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() { 
        return ( 
            <div className="Footer">
                <h4>EcoMap<i className="fas fa-leaf"></i></h4>
                <h5>Created by Grace Manning, Kaitlyn Suzuki, and April Lee.</h5>
                <a  href="https://github.com/gracebmanning/EcoMap"
                    target="_blank"
                    rel="noreferrer noopener">
                    <i className="fab fa-github"></i>
                </a>
            </div>
         );
    }
}
 
export default Footer;