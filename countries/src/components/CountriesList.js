import React, { Component } from 'react';

// Import Components here

class CountriesList extends Component {



  render() {
    return (
      <div className="Countries">
        <h1>List of All Countries</h1>
        <ul>
         {/* Loop through all countries and send them to 'CountryCard' to display them */}
        </ul>
      </div>
    );
  }
}


export default CountriesList;
