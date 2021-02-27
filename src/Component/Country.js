import React from 'react';

const Country = (props) => {
    const country = props.country;
    const {name,capital,region,languages,flag,borders,population,currencies,area,regionalBlocs}= country;
    return (
        <div style={{border:'3px solid black',width:'30%',margin:'10px auto',backgroundColor:'grey',borderRadius:'10px'}}>
            <img src={flag} alt="" style={{width:'75%',marginTop:'10px'}}/>
            <h3>{name}</h3>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Language: {languages[0].name}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Currency: {currencies[0].name}</p>
            <p>
              Regional Blocs: 
            {
                regionalBlocs.map(regional=><span> {regional.acronym}({regional.name})</span>)
            }
            </p>
            <span>
                Border:
            {
                borders.map(border=><span style={{marginLeft:'10px'}}>{border}</span>)
            }
            </span>
        </div>
    );
};

export default Country;