import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { RES_IMG_CDN } from "../config";


const PropertiesOfRestaurant = ({ id, name, imageId, description, price, category, ratings }) => {
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
    </div>
  );
};



const RestaurantInfo = () => {
    const {id} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const [restaurant, setRestaurant] = useState();

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6722437&lng=77.4685418&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");

        const info = await data.json();

        const details = info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(details);

        setRestaurant(details);
    } 


    return !restaurant ? (
  <ShimmerUI />
) : (
  <div className="px-6 py-4">
    <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
    <ul className="flex flex-wrap justify-center gap-4">
      {restaurant?.itemCards?.map((item) => {
        const main = item?.card?.info;
        return (
          <li key={main?.id}>
            <PropertiesOfRestaurant {...main} />
          </li>
        );
      })}
    </ul>
  </div>
);

}

export default RestaurantInfo;