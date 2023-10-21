import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cuisines, costForTwo, avgRating, name, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="restaurant-title">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} * </h4>
    </div>
  );
};

export default RestaurantCard;
