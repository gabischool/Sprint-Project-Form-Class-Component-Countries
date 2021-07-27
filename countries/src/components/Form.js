import React,{useState} from 'react';
import axios from "axios";

function Form(props) {

  const  iniTialState = {
    id:0,
    population: "",
    name: "",
    land_area: "",
          
  };

     
    const [ formList, setFormLIst] = useState(iniTialState);
    

  const handleChange = (event) => {
    let newInput = {...formList, [event.target.name]: event.target.value }
      setFormLIst(newInput)
  }
  
    const handleSubmit = (event) => {
      event.preventDefault()
                    
     axios.post("http://localhost:3333/countries", formList)
      .then((res) => {

        
        props.fetchData()  
          

      })
      .catch((err) => {
          console.log(err)
      })}

   return (
      <div>
        
        <form onSubmit={handleSubmit} >

        <div>
         <label htmlFor="name">
        <input 
         type="text"
         name="name"
         id=""
         value={formList.name}
        onChange={handleChange}
        />
        </label>
        </div>

         <div>
        <label htmlFor="population">
        <input 
         type="text"
         name="population"
         id=""
         value={formList.population}
        onChange={handleChange}
        />
        </label>
        </div>

         <div>
        <label htmlFor="land_area">
        <input 
         type="text"
         name="land_area"
         id=""
         value={formList.land_area}
        onChange={handleChange}
        />
        </label>
        </div>
          <button>Add here </button>
        </form>
        </div>
       
    );

}

export default Form;
