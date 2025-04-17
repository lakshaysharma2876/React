import RestaurantCards from "./RestaurantCard";
import { RestaurantList } from "../config";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

function filterData(searchText, restaurantsArray) {
  const data = restaurantsArray.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}



const Body = () => {
  const [restaurantsArray, setRestaurantsArray] = useState(RestaurantList);
  const [filteredRestaurantsArray, setfilteredRestaurantsArray] = useState(RestaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []); 
  

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6631747&lng=77.3645528&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await data.json();
    console.log(jsonData)
    setRestaurantsArray(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setfilteredRestaurantsArray(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }

  //if you want more data use hard-coded data


  //early return
  if(!restaurantsArray || !filteredRestaurantsArray) return null;
  //if(filteredRestaurantsArray.length === 0) return <h1>nothing found</h1>


  return (restaurantsArray.length === 0 ||
    filteredRestaurantsArray.length === 0) ? (
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
      <div className="restaurant-list" >
        {filteredRestaurantsArray.map((restaurant) => {
          return <RestaurantCards {...restaurant?.info} key={restaurant?.info?.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
