import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "pig", "reptile", "rabbit"]
const AOB =['Yes', 'No']  


const SearchParams = () => {
  
  
  const [location, setLocation] = useState ("Lagos, Nigeria");
  const [animal, setAnimal] = useState("");
  const [number, setNumber] = useState(""); 
  const [aob, setAob] = useState(""); 
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location"> 
          Location
          <input
          onChange={(e) => setLocation(e.target.value)}  
          id="location" value={location} placeholder="location" />
        </label>


        <label htmlFor="animal">Animal
        <select 
        id="animal"
        value = {animal}  
        onChange={(e) => setAnimal(e.target.value)} 
        >
          <option />
        {ANIMALS.map(animal=> (
          <option key = {animal} >{animal}</option>
        ))}
        </select>
        </label>

        <label htmlFor="number">
          Tel.No
          <input
          onChange={(e) => setNumber(e.target.value)}
          id="number" value={number} placeholder="+234" />
          
          </label>

          <label htmlFor="aob">
          AOB
        <select 
        id="aob"
        value = {aob}  
        onChange={(e) => setAob(e.target.value)} 
        >
          <option />
        {AOB.map(aob=> (
          <option key = {aob} >{aob}</option>
        ))}
        </select>
        </label>

        <button>Submit</button> 
      </form>
    </div>
  );
};

export default SearchParams;  