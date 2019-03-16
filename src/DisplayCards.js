import React from "react";
import "./DisplayCards.css";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";

function DisplayCards(props) {
  console.log(props.feedsData);
  return (
    <div className="DisplayCards">
      <div>
        {props.type === "TYPE_1" && (
          <Card1
            subheading={props.data.subtext}
            heading={props.data.heading}
            image={props.data.image}
            location={""}
          />
        )}

        {props.type === "TYPE_2" && (
          <Card2 image={props.data.bannerImage} alt={props.data.bannerImage} />
        )}

        {props.type === "TYPE_3" && (
          <Card3
            image={props.data.user.profileImage}
            name={props.data.user.name}
            profile={props.data.user.collaboratedWith}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayCards;
