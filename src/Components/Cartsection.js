import React from "react";
import "./Cartsection.scss";
import resume from "../assets/resume.png";
import recruitment from "../assets/recruitment.png";
import training from "../assets/training.png";
const Cartsection = ({texts}) => {
  return (
    <React.Fragment>
      <section className="cart-section" id='carts'>
        <div className="title-div">
          <h2>
            {texts.section_2_title}
          </h2>
        </div>
        <div className="cart-items">
          <div>
            <div className='in-div'> 
            <img className='cart-icons' src={resume} alt="resume" />
                  <h3>{texts.section_2_1_title}</h3>
            <p>{texts.section_2_1_description}</p>
            <button>{texts.read_more}<ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
            </div>
          </div>
          <div>
            <div className='in-div'>
            <img className='cart-icons' src={recruitment} alt="recruitment" />
            <h3>{texts.section_2_2_title}</h3>
            <p>{texts.section_2_2_description} </p>
            <button>{texts.read_more}<ion-icon name="arrow-forward-circle-outline"></ion-icon></button>
             </div>
          </div>
          <div>
            <div className='in-div'>
            <img className='cart-icons' src={training} alt="training"/>
            <h3>{texts.section_3_1_title} </h3>
            <p>{texts.section_3_2_title}</p>
            <button>{texts.read_more}<ion-icon name="arrow-forward-circle-outline"></ion-icon></button> 
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cartsection;
