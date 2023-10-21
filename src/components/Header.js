import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState(["Login"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Contact</li>
          <li className="nav-link">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setLogin(login === "Login" ? "Logout" : "Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
