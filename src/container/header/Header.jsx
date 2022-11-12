import React from "react";
import "./header.css";
import {people, ai} from '../../assets/index.js'



const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>Yet bed any for traveling assistance indulgence unpleasing. Not thought all exercise blessing . Indulgence way everyhing joy alteration boisterous the attachment. Party we years to order alloow asked of. 
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Enter Your Email" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt__header-img">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
