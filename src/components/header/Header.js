import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import { BiLogIn } from "react-icons/bi";

const activeLink = ({ isActive }) => (isActive ? `${"active"}` : "");

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <BiLogIn size={35} />
          <span>AUTH:Z</span>
        </div>

        <ul className="home-links">
          <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>

          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
