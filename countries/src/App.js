import React, { Component } from 'react';

// Import Components here
import CountriesList from './components/CountriesList';
// import CountryCard from './components/CountryCard'
import Form from './components/Form';
import axios from 'axios';
import './App.css';


class App extends Component {

  // Build Your constructor with state of "countries: []"
  constructor(props) {
    super() 
    this.state = {
      countries: []
      
    }
  }
  // Use componentDidMount to make a call to API call to http://localhost:3333/countries and set it to the state.
  componentDidMount(){
    axios.get("http://localhost:3333/countries")
    .then(res => {
     this.setState({
      countries: [res.data]
     })
     
    })
    .catch((error) => console.log(error))
   }

  render() {
    return (
      <div className="App">
        <h1>COUNTRIES! </h1>
        {/* <div>Welcome to your Sprint Project</div>
        <div>Start by reading the "README.md" and the comments in the components</div>
        <div>Add your components here</div>
        <div>Have fun!</div> */}
        <div className="div1">
          <CountriesList countries ={this.state.countries} />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
