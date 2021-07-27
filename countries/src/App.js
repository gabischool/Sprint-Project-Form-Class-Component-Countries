import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import CountriesList from './components/CountriesList';
import Form from "./components/Form"
import { Container } from 'reactstrap';

class App extends Component {

  constructor() {
    super()
    this.state = {
    countries: []

    }

  } 
 
 
          componentDidMount(){
             
                this.fetchData()
            }
              
            fetchData = () =>  {
                
              axios.get("http://localhost:3333/countries")
              .then(res => {
                this.setState ({
                  countries: res.data



                })
                  // console.log(res.data)

              })
            }

            

  render() {
    return (
      <Container className="App">
        <h1>COUNTRIES! </h1>
        <CountriesList countries={this.state.countries} />
        < Form  fetchData={this.fetchData}/>
        
        
      </Container>
    );
  }
}

export default App;
