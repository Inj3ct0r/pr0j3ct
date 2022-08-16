/*-registrationFormDropdown.jsx-*/

// Provided from https://tutorial101.blogspot.com/2021/11/reactjs-dependent-dropdown-country.html

import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries : [],
            states : [],
            shownStates : [],
            cities : [],
            shownCities : [],
            selectedCountry : 'Country',
            selectedState : 'State',
            selectedCity : 'City'
        };
        // The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, 
        // with a given sequence of arguments preceding any provided when the new function is called.
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this)
    }
    
    // BBDD Calls are expensive, countries cities and states should be saved in another place
    // Also, they should be assigned alongside the render, not after it
    componentDidMount() {
        // Get Countries, states and cities from BBDD, investigate if its better to store them in an array with the rest of code
        fetch('http://localhost:3001/countries/all')
            .then(function(res) {
                return res.json();
            }).then((json)=> {
                this.setState({
                countries: json
                })
            });
        fetch('http://localhost:3001/states/all')
            .then(function(res) {
                return res.json();
            }).then((json)=> {
                this.setState({
                states: json
                })
            });
        fetch('http://localhost:3001/cities/all')
            .then(function(res) {
                return res.json();
            }).then((json)=> {
                this.setState({
                cities: json
                })
            });
        
    }
    

// Change parentCallback for all functions - Objective is to have a single function that handles all the values

    // When a country is selected, set the value and display the states of that country in the next dropdown
    changeCountry(event) {
        // Empty array for the display states and cities
        var foo = []
        // Store the selected country in our variable
        this.setState({selectedCountry: event.target.value});
        // Value sent in callback()
        this.props.parentCallback1(event.target.value);
        // Search for the states related to the selected country
        for(let i = 0 ; i < this.state.countries.length; i++){
            if(this.state.countries[i].name === event.target.value){
                var code = this.state.countries[i].c_code
                for(let j = 0; j < this.state.states.length; j++){
                    if(this.state.states[j].c_code === code){
                        foo.push(this.state.states[j])
                    }
                }
                break
            }
        }
        // Display only the states related to the country
        this.setState({shownStates : foo});
    }

    changeState(event) {
        var foo = []
        this.setState({selectedState: event.target.value});
        this.props.parentCallback2(event.target.value);
        for(let i = 0 ; i < this.state.states.length; i++){
            if(this.state.states[i].name === event.target.value){
                var code = this.state.states[i].s_code
                for(let j = 0; j < this.state.cities.length; j++){
                    if(this.state.cities[j].s_code === code){
                        foo.push(this.state.cities[j])
                    }
                }
                break
            }
        }
        this.setState({shownCities : foo});
    }
 
    changeCity(event){
        this.setState({selectedCity: event.target.value})
        this.props.parentCallback3(event.target.value);
    }
     
    render() {
        return (
            <div className="form-body">     
                <div className="countries">
                    <label className="form__label" for="countries">País </label>
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>País</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="states">
                    <label className="form__label" for="states">Estado/Región </label>
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>Estado/Región</option>
                        {this.state.shownStates.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="cities">
                    <label className="form__label" for="cities">Ciudad </label>
                    <select className="form-select" placeholder="City" value={this.state.selectedCity} onChange={this.changeCity}>
                        <option>Ciudad</option>
                        {this.state.shownCities.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

export default Dropdown;