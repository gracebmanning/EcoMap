import React, { Component } from 'react';



  
class Emissions extends Component {
    constructor(props) {
        super(props);
        var gal = (this.props.distance/25.0);

        this.emissions = gal * 8.887;
    };

    render() { 
        return ( 
            <div className="Emissions">
                
                <h1>{this.emissions}</h1>
                <p>Based on a 25mpg fuel efficiency</p>
                <p> According to the <a href="https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references">Greenhouse Gases Equivalencies Calculator</a> by the EPA</p>
            </div>
         );
    }
}
 
export default Emissions;