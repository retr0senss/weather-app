import React, { useContext } from "react";
import SearchIcon from "../search.svg";
import { AppContext } from "../App";

const Search = () => {
  const { setSearchCity, getCityData, searchCity, setIsLoading } =
    useContext(AppContext);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a city a name"
        aria-label=""
        value={searchCity}
        aria-describedby="basic-addon1"
        onChange={(event) => setSearchCity(event.target.value)}
      />
      <div className="input-group-prepend">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            if (searchCity !== "") {
              getCityData(searchCity);
              setSearchCity("");
            } else {
              alert("Enter a city name!");
            }
          }}
        >
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
