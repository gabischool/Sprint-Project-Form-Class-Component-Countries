import React from 'react';
import CountryCard from './CountryCard';
import { Row } from 'reactstrap';

 function CountriesList(props){

  // console.log(props)


  
    return (
      <Row className="Countries">
        {props.countries.map((country) =>
           
            < CountryCard  countries={country}/>
        
          
          )}
        
      </Row>
    );
  }


export default CountriesList;
