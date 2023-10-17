import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Heading
 * - Logo
 * - Nav link
 * Body
 * - Search
 * - Restaurant Container
 *    - restaurant card
 *       - img
 *       - name, cuisine, delivery time, star rating
 * Footer
 * - Copyright
 * - address
 * - link
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://banner2.cleanpng.com/20180702/vrt/kisspng-online-food-ordering-food-delivery-grubhub-5b3a1b75a36132.9626073015305347736692.jpg"
        />
      </div>
      <div className="nav-menu">
        <ul>
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e165225d26130103fecf1c40f5dc3669"
      />
      <h3 className="restaurant-title">{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.eta} Min</h4>
      <h4>{props.rating} *</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="restaurant-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="biryani, south Indian, Asian"
          rating="4.4"
          eta="40"
        />
        <RestaurantCard
          resName="Burger King"
          cuisine="burger"
          rating="4.5"
          eta="25"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
