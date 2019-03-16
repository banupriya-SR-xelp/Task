import React, { Component } from "react";
import Image from "./Image.js";
import PropTypes from "prop-types";
function iconHolder(props) {
  return (
    <div className="Card3-iconHolder ">
      {props.iconList.map(i => (
        <Image src={i} className="Card1-icon" alt={i} />
      ))}
    </div>
  );
}
iconHolder.prototype = {
  iconList: PropTypes.array
};
export default iconHolder;
