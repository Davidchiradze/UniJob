import React from "react";
import "./Header.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = ({texts}) => {
  console.log(texts)
  return (
    <header>
      <div className="navigation">
        <img src={logo} />
        <div className="nav-menu">
          <div className="nav-buttons">
          <Link to='/signin'>
            <button className="btn sign-in">
              {texts.sign_in} <ion-icon name="log-in-outline"></ion-icon>
            </button>
          </Link>
          <Link to='/signup'>
            <button className="btn sign-up">
              {texts.sign_up} <ion-icon name="person-add-outline"></ion-icon>
            </button>
            </Link>
          </div>
        </div>

        <div className="hero-text-box">
          <h1>
          {texts.section_1_title}
            {/* Hire or become <br></br>the best freelancers for any job, online. */}
          </h1>
          <a href="#carts" className="btn-full">
            {texts.get_started}
          </a>
          <a className="btn-ghost">{texts.show_me_more}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
