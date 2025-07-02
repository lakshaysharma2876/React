import { MAIN_RES_CDN } from "../config";
import { useDispatch } from "react-redux";
import { RES_IMG_CDN } from "../config";
import { addItem } from "./cartSlice";

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


export const PropertiesOfRestaurant = ({ id, name, imageId, description, price, category, ratings }) => {

  const dispatch = useDispatch();

  const handleAddItems = (items) => {
    dispatch(addItem(items));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-3 w-72 transition-transform hover:scale-105 duration-300">
      <img
        className="w-full h-40 object-cover rounded-md mb-3"
        src={RES_IMG_CDN + imageId}
        alt={name}
      />
      <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-1">Description: {description || 'No description available.'}</p>
      <p className="text-sm text-gray-700 mb-1 font-semibold">Price: ₹{price / 100}</p>
      <p className="text-sm text-gray-700 mb-1">Category: {category}</p>
      <p className="text-sm text-yellow-700 font-medium">Rating: {ratings?.aggregatedRating?.rating || 'N/A'} ⭐</p>
      <button className="w-full rounded-2xl border-2 p-1 mt-1 font-bold cursor-pointer" onClick={
        (items) => {
          handleAddItems(items);
        }
      }>Add item</button>
    </div>
  );
};
