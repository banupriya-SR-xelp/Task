import React, { Component } from "react";
import PropTypes from "prop-types";
import Image from "./Image.js";

function ProfileHolder(props) {
  return (
    <div className="Card3-profileHolder ">
      {props.profileList.map(i => (
        <Image src={i.profileImage} alt={i} />
      ))}
    </div>
  );
}
ProfileHolder.prototype = {
  profileList: PropTypes.array
};
export default ProfileHolder;
