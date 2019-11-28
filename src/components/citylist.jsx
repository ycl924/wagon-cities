import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import City from './city'

const CityList = () => {
  const cities = useSelector(state => state.cityList);
  return (
    <ul className="list-group cities">
      {cities.map(city => (
        <City key={city.name} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
