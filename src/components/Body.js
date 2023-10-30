import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  let restaurantData = "";
  //use state
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  //use Effect
  useEffect(() => {
    fetchData();
    console.log("use effect called.");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.5355161&lng=77.3910265"
    );
    const json = await data.json();

    setrestaurantList(
      json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const [searchText, setSearchText] = useState();

  // conditional rendering

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }
  // instaed of above code we use terniary operator

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="head-section">
        <div className="search-bar">
          <input
            type="text"
            name="searchText"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              filteredList = restaurantList.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurants(filteredList);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
