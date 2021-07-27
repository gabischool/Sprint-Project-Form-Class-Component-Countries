import React from 'react';
import CountriesList from './CountriesList';
import { Card, CardTitle, CardBody,CardText, CardSubtitle, Col

} from 'reactstrap';



const CountryCard = props => {
  
  return (
    
      <Col xs="6">
      <Card>
          <CardBody>
          <CardTitle tag="h5">{props.countries.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.countries.population} </CardSubtitle>
          <CardText>{props.countries.land_area}</CardText>
          
        </CardBody>
      </Card>
      </Col>
  );
};


export default CountryCard;



