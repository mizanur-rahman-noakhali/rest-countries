import React from 'react';
import { Link } from 'react-router-dom';


const Country = (props) => {
  const {name,capital,subregion,alpha2Code}=props.country;
  const countryStyle={
    border:'1px solid red',
    margin:'20px',
    padding:'5px',
    borderRadius:'5px',
  }
  return (
    <div style={countryStyle}>
      <h1>Country:{name}</h1>
      <p>Capital:{capital}</p>
      <p>subregion:{subregion}</p>
      <p>{alpha2Code}</p>
      <Link to={`/name/${name}`}>Show Detail:{name}</Link> 
          
    </div> 
  );
};

export default Country;