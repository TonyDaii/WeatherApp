import './style.scss';


export default function WeatherWidget() {
  return (
    <div className="weather-widget">
      <div className="weather-widget__infos">
        <p className="weather-widget__city">Paris</p>
        <p className="weather-widget__desc">desc</p>
      </div>
      <div className="weather-widget__temperature">5<sup>°C</sup></div>
    </div>
  );
}

