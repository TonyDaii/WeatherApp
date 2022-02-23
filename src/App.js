import './App.scss';
import { useState } from 'react';
import WeatherWidget from './components/WeatherWidget';

function App() {
  const [city, setCity] = useState();
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(value);
  };
 
  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form__input"
          type="text"
          placeholder="Saisir la ville"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      <WeatherWidget city={city}/>
    </div>
  );
}

export default App;
