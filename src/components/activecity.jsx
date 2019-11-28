import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ActiveCity = () => {
  const city = useSelector(state => state.activeCity);
  const url = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;
  return (
    <div className="active-city">
      <h3>{city.name}</h3>
      <p>{city.address}</p>
      <img src={url} width="100%" alt="" />
    </div>
  );
};

export default ActiveCity;
