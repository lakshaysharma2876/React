import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { RES_IMG_CDN } from "../config";


const PropertiesOfRestaurant = ({ id, name, imageId, description, price, category, ratings }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={RES_IMG_CDN + imageId} alt={name} />
            <p>Description: {description}</p>
            <p>Price: ₹{price / 100}</p>
            <p>Category: {category}</p>
            <p>Rating: {ratings?.aggregatedRating?.rating}⭐</p>
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
      <div className="restaurantInfo">
        <h1>Menu : </h1>
        <ul>
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