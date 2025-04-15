
const RestaurantCards = ({name, cuisines, cloudinaryImageId, avgRating}) => {
    return (
        <div className="cards">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h2><u>{name}</u></h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>Reviews : {avgRating} stars</h3>
        </div>
    );
}


export default RestaurantCards;