import RestaurantCards from "./RestaurantCard";
import { RestaurantList } from "../config";

const Body = () => {
    return (
        <div className="restaurant-list">
            {
                RestaurantList.map(restaurant => {
                    return <RestaurantCards {...restaurant.info}/>
                })
            }
        </div>
    );
}

export default Body;