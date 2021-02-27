import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country';

function App() {
  const [country,setCountry] = useState([]);
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCountry(data)
    })
  },[])
  return (
    <div className="App">
      <h1>Total Country Information: {country.length}</h1>
         {
          country.map(element=><Country country={element}></Country>)
         }
    </div>
  );
}

export default App;
