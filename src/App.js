import "./App.css";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <index />
        <h1>Weather App</h1>

        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
