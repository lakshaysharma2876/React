import { useState, useEffect } from "react";
import { RestaurantList } from "../config";
import { getRestaurants } from "./helper";

const useRestaurants= () => {
    const [restaurantsArray, setRestaurantsArray] = useState(RestaurantList);
  const [filteredRestaurantsArray, setfilteredRestaurantsArray] = useState(RestaurantList);
  

  useEffect(() => {
    getRestaurants(setRestaurantsArray, setfilteredRestaurantsArray);
  }, []); 

  

  return [restaurantsArray, filteredRestaurantsArray, setfilteredRestaurantsArray];
  
}

export default useRestaurants;



  