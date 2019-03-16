import React, { Component } from "react";
import PropTypes from "prop-types";

function Image(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}
Image.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string
};
export default Image;
