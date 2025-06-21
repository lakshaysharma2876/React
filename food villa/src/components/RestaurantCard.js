import { RES_CARD_CDN } from "../config";

const RestaurantCards = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="p-4 bg-amber-45 rounded-2xl w-72 overflow-hidden hover:shadow-2xl transition-shadow duration-200">
    
      <img
        className="w-full h-48 object-cover rounded-xl mb-2"
        src={RES_CARD_CDN + cloudinaryImageId}
        alt={name}
      />
      <h1 className="font-bold text-xl break-words whitespace-normal mb-1">
        {name}
      </h1>
      <h2 className="text-md break-words whitespace-normal mb-1 font-medium">
        {cuisines?.join(", ")}
      </h2>
      <h3 className="text-md font-medium">Reviews: {avgRating} stars</h3>
    </div>
  );
};

export default RestaurantCards;
