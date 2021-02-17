import React, { Component } from 'react';
import { navItems } from './navItems';
import { Button } from './button';
import './navBar.css';

class NavBar extends Component {
    state = { clicked: false } // this means a navitem has not been clicked yet

    /* Set 'clicked' to the opposite value every time a click occurs. */
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="navbarItems">
                <h1 className="navbar-logo">EcoMap<i className="fas fa-leaf"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* If the menu has been clicked, change the icon to an X to close. Else, keep as bars icon. */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {navItems.map((elem, index) => {
                        return(
                            <li key={index}>
                                <a className={elem.cName} href={elem.link}>
                                    {elem.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <Button>Sign up</Button>
            </nav>
        );
    }
}

export default NavBar;