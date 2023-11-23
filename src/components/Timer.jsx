import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = (props) => {
  const navigate = useNavigate();
  let numericValue = parseInt(props.initialSeconds, 10);
  console.log(numericValue);
  const [seconds, setSeconds] = useState(numericValue);
  console.log(seconds)
  
 
  useEffect(() => {
    console.log('useEffect')
   
    // Function to be called every 
    const tick = () => setSeconds((prevSeconds) => (prevSeconds > 1 ? prevSeconds - 1 : numericValue ));
         

    // Set up the interval
    const intervalId = setInterval(tick, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  },[props.initialSeconds]); // Empty dependency array ensures that the effect runs only once when the component mounts

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    
       <span> {formatTime(seconds)}</span>  
    
  );
};

export default CountdownTimer;
