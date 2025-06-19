import { MAIN_RES_CDN } from "../config";

export function filterData(searchText, restaurantsArray) {
  const data = restaurantsArray.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}

export async function getRestaurants(setRestaurantsArray, setfilteredRestaurantsArray) {
    const data = await fetch(MAIN_RES_CDN);

    const jsonData = await data.json();
    console.log(jsonData)
    setRestaurantsArray(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    setfilteredRestaurantsArray(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }