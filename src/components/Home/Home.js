import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
           const url=('https://restcountries.com/v2/all')
           fetch(url)
           .then(res=>res.json())
           .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h1>Length:{countries.length}</h1>
      {
         countries.map(country => <Country country={country}></Country>)
      }
    </div>
  );
};

export default Home;