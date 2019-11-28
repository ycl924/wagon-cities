import React, { useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from './redux';


const City = (props) => {
  console.log(useState(''))
  const dispatch = useDispatch();
  return (
    <li
      className="list-group-item"
      onClick={() => dispatch(selectCity(props.city))}
    >{props.city.name}</li>
  );
};

export default City;
