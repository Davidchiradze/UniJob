import React from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="navigation">
        <img src={logo} />
        <div className="nav-menu">
          <div className="nav-buttons">
          <Link to='/signin'>
            <button className="btn sign-in">
              Sign In <ion-icon name="log-in-outline"></ion-icon>
            </button>
          </Link>
          <Link to='/signup'>
            <button className="btn sign-up">
              Sign Up <ion-icon name="person-add-outline"></ion-icon>
            </button>
            </Link>
          </div>
        </div>

        <div className="hero-text-box">
          <h1>
            Hire or become <br></br>the best freelancers for any job, online.
          </h1>
          <a href="#carts" className="btn-full">
            Get Started
          </a>
          <a className="btn-ghost">Show me more</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
