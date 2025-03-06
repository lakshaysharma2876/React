import { cuisine_items } from "../config";

const RestaurantCards = ({name, cuisine, image, ratingNew}) => {
    return (
        <div className="cards">
            <img src={image?.url}/>
            <h2><u>{name}</u></h2>
            <h3>{cuisine.map(cuisine_items).join(", ")}</h3>
            <h3>Reviews : {ratingNew.ratings?.DINING?.rating} stars</h3>
        </div>
    );
}


export default RestaurantCards;