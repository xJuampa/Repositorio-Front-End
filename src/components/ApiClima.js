import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ApiClima = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=-26.82414&lon=-65.2226&appid=7745ebb8d645bbd1bd3cfd6a7b43b035&units=metric&lang=es`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



  return (
    



    <div className="weather-widget">
    {weatherData ? (
      <>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon"/>
        <div className="temperature">
        {weatherData.main.temp.toFixed(1)}°C
        </div>
        
        
      </>
    ) : (
      <div className="loading">Loading weather data...</div>
    )}
  </div>







  );
};

export default ApiClima;



