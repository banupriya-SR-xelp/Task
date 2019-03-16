import React, { Component } from "react";
import Image from "./Image.js";
import "./Card3.css";
import Profile_1 from "./img/Profile_1.png";
import Profile_2 from "./img/Profile_2.png";
import Profile_3 from "./img/Profile_3.png";
import Profile_4 from "./img/Profile_4.png";
import Dribble from "./img/Dribble.svg";
import LinkedIn from "./img/LinkedIn.svg";
import Twitter from "./img/Twitter.svg";
import Link from "./Link.js";
import PropTypes from "prop-types";
import IconHolder from "./IconHolder.js";
import ProfileHolder from "./ProfileHolder.js";

function Card3(props) {
  const icons = [LinkedIn, Dribble, Twitter];
  const profile = [Profile_1, Profile_2, Profile_3, Profile_4];
  return (
    <div className="Card3">
      <Image src={props.image} className="Card3-image" alt={"photo"} />
      <div className="Card3-name">{props.name}</div>
      <div className="Card3-company">{props.company}</div>
      <div className="Card3-designation">
        <div className="Card3-text">{props.designation}</div>
      </div>
      <div className="Card3-imageHolder">
        usually collaborated with
        <div class="Card3-profileHolder">
          <ProfileHolder profileList={props.profile} />
        </div>
      </div>
      <div className="Card3-iconHolder ">
        <IconHolder iconList={icons} />
      </div>
    </div>
  );
}
Card3.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  designation: PropTypes.string,
  image: PropTypes.string
};
export default Card3;
