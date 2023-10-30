import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(["Login"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-menu">
        <ul>
          <li className="nav-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-link">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav-link"><Link to={'/contact'}>Contact</Link></li>
          <li className="nav-link"><Link to={'/cart'}>Cart</Link></li>
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
