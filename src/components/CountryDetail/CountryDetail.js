import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const {name}=useParams();
   const[country,setCountry]=useState({});
  useEffect(()=>{
       const url=`https://restcountries.com/v2/name/${name}`
       fetch(url)
       .then(res=>res.json())
       .then(data=> setCountry(data))
  },[])
  return (
    <div>
      <h1> This Is Country Detail {name}</h1>
      <p>Country:{name}</p>
      <p>Capital:{country.capital}</p>
      <p>subregion:{country.subregion}</p>
    </div>
  );
};

export default CountryDetail;