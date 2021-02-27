import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country';

function App() {
  const [country,setCountry] = useState([]);
  const [count,setCount] = useState([]);
  const [det,setDet] = useState([]);
  const handleClick = (length)=> {
    const newCart = [...count,length]
    setDet(length)
   setCount(newCart);
  }
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
      <h2>Add: {count.length} </h2>
         {
          country.map(element=><Country country={element} key={element.alpha3Code} handleClick={handleClick} ></Country>)
         }
         
    </div>
  );
}

export default App;
