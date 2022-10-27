import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import loginImg from "../../assets/login.svg";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>Ultimate MERN Stack Authentication System</h2>
          <p>
            Learn and Master Authentication and Authorization using MERN Stack.
          </p>
          <p>
            Implement User Regisration, Login, Password Reset, Social Login,
            User Permissions, Email Notifications etc.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">
              <Link to={"/login"}>Register</Link>
            </button>
            <button className="--btn --btn-primary">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={loginImg} alt="Inventory" />
        </div>
      </section>
    </>
  );
};

export default Home;
