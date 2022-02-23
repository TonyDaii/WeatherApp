import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function WeatherWidget({ city }) {
  const [desc, setDesc] = useState("");
  const [temperature, setTemperature] = useState("");
  const [cityName, setCityName] = useState("");
  const [windSpeed, setWindSpeed] = useState("");

  useEffect(() => {
    const apiKey = "c97c909d9f4ed3bc36c00de6d9abd330";

    const loadData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appId=${apiKey}`);
        const { main: { temp }, weather, name, wind: { speed }} = response.data;
        console.log(response.data)
        setTemperature(Math.round(temp));
        setDesc(weather[0].description);
        setCityName(name)
        setWindSpeed(speed)
      }
      catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, [city]);

  return (
    <div>
        {cityName.toLowerCase() === city.toLowerCase() ? 
        <div className="weather-widget">
        <div className="weather-widget__infos">
        <p className="weather-widget__city">{city.charAt(0).toUpperCase() + city.substring(1)}</p>
        <p className="weather-widget__desc">{desc}</p>
        <p className="weather-widget__desc">Vitesse du vent {windSpeed}</p>
      </div> 
      <div className="weather-widget__temperature">{temperature}<sup>°C</sup></div>
    </div> : <p>Aucun résultats trouvée</p>}
    </div>
  );
}

WeatherWidget.propTypes = {
    city: PropTypes.string,
  };
  
  WeatherWidget.defaultProps = {
    city: 'paris',
  };
  