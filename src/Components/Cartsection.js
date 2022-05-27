import React from "react";
import "./Cartsection.scss";
import resume from "../assets/resume.png";
import recruitment from "../assets/recruitment.png";
import training from "../assets/training.png";
const Cartsection = () => {
  return (
    <React.Fragment>
      <section className="cart-section" id='carts'>
        <div className="title-div">
          <h2>
            High Quality Construction Solutions For Residentials & Industries
          </h2>
        </div>
        <div className="cart-items">
          <div>
            <div className='in-div'> 
            <img className='cart-icons' src={resume} alt="resume" />
            <h3>Open To Work?</h3>
            <p>If you already have some knowledge and trying to get a job by your skills</p>
            <button>Read More  <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
            </div>
          </div>
          <div>
            <div className='in-div'>
            <img className='cart-icons' src={recruitment} alt="recruitment" />
            <h3>Looking to Hire?</h3>
            <p>If you want to hire a talent relevant to you </p>
            <button>Read More  <ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
             </div>
          </div>
          <div>
            <div className='in-div'>
            <img className='cart-icons' src={training} alt="training"/>
            <h3>Looking To Study? </h3>
            <p>If you want to improve your skills and become relevant for recruiter</p>
            <button>Read More <ion-icon name="arrow-forward-circle-outline"></ion-icon></button> 
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cartsection;
