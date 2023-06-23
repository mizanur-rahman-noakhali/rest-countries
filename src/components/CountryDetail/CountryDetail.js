import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const {CountryCode}=useParams();
  return (
    <div>
      <h1> This Is Country Detail {CountryCode}</h1>
    </div>
  );
};

export default CountryDetail;