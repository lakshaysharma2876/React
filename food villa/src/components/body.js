import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";
import useRestaurants from "../utils/useRestaurants";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [restaurantsArray, filteredRestaurantsArray, setfilteredRestaurantsArray] = useRestaurants();

  const isOnline = useOnline();
  if(!isOnline) {
    return <h1>🔴Oops! Looks like you dont have an active Internet Connection</h1>
  }

  //early return
  if (!restaurantsArray || !filteredRestaurantsArray) return null;

  return restaurantsArray.length === 0 ||
    filteredRestaurantsArray.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          id="search-btn"
          onClick={() => {
            //to filter the restaurants based on the searched text
            const data = filterData(searchText, restaurantsArray);
            //display the restaurants cards
            setfilteredRestaurantsArray(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantsArray.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant?.info?.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantCards {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
