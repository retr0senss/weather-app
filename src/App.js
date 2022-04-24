import "./App.css";
import axios from "axios";
import { useEffect, useState, createContext } from "react";
import Card from "./components/Card";
import Search from "./components/Search";

export const AppContext = createContext();

const API_KEY = "5a9887854f41e5c7752c6dd70fa176f7";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [city, setCity] = useState({
    name: "",
    weather: "",
    description: "",
    minTemp: "",
    maxTemp: "",
    icon: "",
  });

  const getCityData = async (cityName) => {
    const cityData = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    ).then((res) => {
      const { data } = res;
      setCity({
        name: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        icon: data.weather[0].icon,
      });
      setIsLoading(false);
    });
  };

  return (
    <AppContext.Provider
      value={{
        setSearchCity,
        searchCity,
        setIsLoading,
        isLoading,
        setCity,
        city,
        getCityData,
      }}
    >
      <div className="app">
        <div className="container">
          <Search />
          <Card />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
