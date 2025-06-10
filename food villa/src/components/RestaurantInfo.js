import { useParams } from "react-router";
import { useState, useEffect } from "react";


const RestaurantInfo = () => {
    const {id} = useParams();

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6722437&lng=77.4685418&restaurantId=686202&catalog_qa=undefined&submitAction=ENTER");

        const info = await data.json();
        console.log(info?.data);
    } 

    return(
        <h2>{id}</h2>
    )
}

export default RestaurantInfo;