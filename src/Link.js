import React, { Component } from "react";
import "./Link.css";
import PropTypes from "prop-types";

function Link(props) {
  return (
    <a href={props.href}>
      <div className="Link-text">{props.name}</div>
    </a>
  );
}
export default Link;
Link.prototype = {
  href: PropTypes.string,
  name: PropTypes.string
};
