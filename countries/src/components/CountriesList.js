import React, { Component } from 'react';
import CountryCard from './CountryCard';
// Import Components here

class CountriesList extends Component {

  constructor(...props){
    super(...props)
  }
  render() {

    console.log(this.props)
    return (
      <div className="Countries">
        <h1>List of All Countries</h1>
        <ul>
         {/* Loop through all countries and send them to 'CountryCard' to display them */}
         {this.props.countries.map(country => {
         return <CountryCard wadan = {country} /> 
   } )}  
        </ul>
      </div>
    );
  }
}


export default CountriesList;
