import React from 'react';

const CountryCard = props => {
  console.log(props.wadan)
  return (
    <div className="Country">
      {/* Display single country here */}
      {props.wadan.map(halWadan =>(
       
       <div className="oneCountry">
         
       <h3>Country Name: {halWadan.name}</h3>
       <h3>Population: {halWadan.population}</h3>
       <h3>Land Area: {halWadan.land_area}</h3>
      
       </div>
      
     ))}
      
  
    </div>
  );
};


export default CountryCard;

