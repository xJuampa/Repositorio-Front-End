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
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Sensacion Térmica: {weatherData.main.feels_like}°C </p>
          <p>Clima: {weatherData.weather[0].description}</p>
          <p>Icono: {weatherData.weather[0].icon} </p>
          <img src = {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
          
          <p>Porcentaje cielo cubierto: {weatherData.clouds.all}</p>
        </div>
      ) : (
        <p>Cargando datos del tiempo...</p>
      )}
    </div>
  );
};

export default ApiClima;
