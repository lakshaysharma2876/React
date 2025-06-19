import { RES_CARD_CDN } from "../config";

const RestaurantCards = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
        <div className="cards">
            <img src={ RES_CARD_CDN + cloudinaryImageId}/>
            <h2><u>{name}</u></h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>Reviews : {avgRating} stars</h3>
        </div>
    );
}


export default RestaurantCards;