import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { PropertiesOfRestaurant } from "../utils/helper";

const RestaurantInfo = () => {
  
  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [restaurant, setRestaurant] = useState();

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6722437&lng=77.4685418&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const info = await data.json();

    const details =
      info?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
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
};

export default RestaurantInfo;
