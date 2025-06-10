import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantInfo = () => {
    const {id} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    const [restaurant, setRestaurant] = useState();

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6722437&lng=77.4685418&restaurantId=686202&catalog_qa=undefined&submitAction=ENTER");

        const info = await data.json();

        const details = info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(details);

        setRestaurant(details);
    } 

    return (!restaurant) ? <ShimmerUI /> : (
        <>
        <h1>{restaurant?.itemCards[0]?.card?.info?.name}</h1>
        </>
    )
}

export default RestaurantInfo;