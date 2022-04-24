/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import axios from "axios";

const Card = () => {
  const { city, isLoading, getCityData, searchCity } = useContext(AppContext);

  useEffect(() => {
    getCityData(searchCity);
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    );
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        class="card-img-top"
        src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <p className="card-text">
          In {city.name} weather is {city.weather}.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Description: {city.description}</li>
        <li className="list-group-item">
          Min Temp: Minimum Temp in day is {city.minTemp} °C .
        </li>
        <li className="list-group-item">
          Max Temp: Maximum Temp in day is {city.maxTemp} °C
        </li>
      </ul>
    </div>
  );
};

export default Card;
