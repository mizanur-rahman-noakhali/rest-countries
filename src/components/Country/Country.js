import React from 'react';


const Country = (props) => {
  const {name,capital,subregion}=props.country;
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
      
    </div> 
  );
};

export default Country;