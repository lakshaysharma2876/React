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
    <h1 className="font-bold text-2xl py-3 px-2">Hey, user what you feeling to eat today!!</h1>
      <div className="flex flex-wrap px-2 gap-x-2">
        
        <input className="border-1 rounded-sm p-1 focus-within:p-1"
          type="text"
          id="search-bar"
          placeholder="🔍Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="bg-white px-2 border-1 text-black font-medium rounded-sm hover:bg-gray-100"
          id="search-btn"
          onClick={() => {
            //to filter the restaurants based on the searched text
            const data = filterData(searchText, restaurantsArray);
            //display the restaurants cards
            setfilteredRestaurantsArray(data);
          }}
        >
          <h1 className="hover:text-red-500">Search</h1>
        </button>
      </div>
      <div className="flex flex-wrap content-between shadow">
        {filteredRestaurantsArray.map((restaurant) => {
          return (
            <div key={restaurant?.info?.id} className="p-2">
              <Link
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCards {...restaurant?.info} />
            </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
