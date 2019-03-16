import React, { Component } from "react";
import Image from "./Image.js";
import "./Card1.css";
import Location from "./img/Location.svg";
import photo from "./img/img2.jpg";
import PropTypes from "prop-types";

function Card1(props) {
  return (
    <div className="Card1">
      <Image src={props.image} className="Card1-image" alt={"background"} />

      <div className="Card1-button">
        <div className="Card1-subheading">{props.subheading}</div>
      </div>
      <div className="Card1-footer">
        <div className="Card1-heading">{props.heading}</div>
        <Image src={Location} className="Card1-icon" alt="location" />
        <div className="Card1-location ">{props.location}</div>
      </div>
    </div>
  );
}

Card1.propTypes = {
  subheading: PropTypes.string,
  heading: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string
};

Card1.defaultProps = {
  subheading: "India",
  heading: "Biking in Ladakh",
  image: photo
};
export default Card1;
