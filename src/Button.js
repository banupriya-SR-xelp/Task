import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button" key={props.id} type={props.type}>
      {props.children}
    </div>
  );
}

export default Button;
