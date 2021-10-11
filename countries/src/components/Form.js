import axios from "axios";
import React, {useState} from "react";

function Form() {

  // 1. Set up state for form

  const [formcountries, setFormscountries] = useState({
    name: "",
    population: "",
    land_area: "",
    id: Date.now(),

  })

  // 2. Create "handleChange" function to handle form changes and add changes to above state

  function handleChange(event) {

    let newData = {...formcountries, [event.target.name]: event.target.value}

    setFormscountries(newData)

  }
  // 3. Create "handleSubmit" function to send data to http://localhost:3333/countries using POST request.
        // Make sure to update your countries list to show the recently added country.
        function handleSubmit(event){
          event.preventDefault()
          axios.post("http://localhost:3333/countries", formcountries)
          .then((res)=> {
            setFormscountries(res.data)
          })
        }
  
    return (
      <div>
      {/* Build your form here */}
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Title</label>
      <input
        type="text" 
        placeholder="Enter Country name"
        id="name"
        name="name"
        value={formcountries.name}
        onChange={handleChange}
       
      />
     
     <label htmlFor="text">population</label>
      <input
        type="text"
        placeholder="Enter Country email population"
        id="population"
        name="population"
        value={formcountries.population}
        onChange={handleChange}
       
      />
    <label htmlFor="text">land_area</label> 

          <input
            type="text"
            placeholder="Enter land_area"
            id="land_area"
            name="land_area"
            value={formcountries.land_area}
            onChange={handleChange}
s
    />
      <button type="submit">Add Country</button>
    </form>

      </div>
    );

}

export default Form;


