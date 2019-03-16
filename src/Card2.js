import React, { Component } from "react";
import Image from "./Image.js";
import "./Card2.css";
import PropTypes from "prop-types";
import Link from "./Link.js";

function Card2(props) {
  return (
    <div className="Card2">
      <Image src={props.image} className="Card2-image" alt="banner" />
      <div className="Card2-heading">{props.heading}</div>
      <div className="Card2-subheading">{props.subheading}</div>
      <div className="Card2-link">
        <Link href={"#"} name={"Know More"} />
      </div>
    </div>
  );
}
Card2.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.url
};
export default Card2;
