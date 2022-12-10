import React, { useState } from 'react';
import './app.css';
import data from '../../data/data.json';
import Rate from '../rate/Rate.jsx';

function App() {
const [count,setCount] = useState(0) 

  return ( 
  <div className = "App" > 
  {data.map(rate =>(
        <Rate 
        key={rate.id}
        price = {rate.price}
        speed = {rate.speed}
        classHeader = {rate.header}
        classSection = {rate.section}
        isSelected={rate.id === count}
        setCount = {setCount}
        id = {rate.id}
        />
      ))
    } </div>
  );
}

export default App;