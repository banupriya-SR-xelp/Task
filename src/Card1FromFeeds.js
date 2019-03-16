import React, { Component } from "react";
import "./Card1FromFeeds.css";
import "./Card1.css";
import Card1 from "./Card1.js";
import img from "./img/bg.png";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";

class Card1FromFeeds extends Component {
  render() {
    const card1TextValues = [
      {
        photo: img,
        heading: "Fishing in the Congo",
        subtext: "Congo"
      },
      {
        photo: img1,
        heading: "Rafting in the Amazon",
        subtext: "Brazil"
      },
      {
        photo: img2,
        heading: "Biking in Ladakh",
        subtext: "India"
      },
      {
        photo: img3,
        heading: "Rafting in Bali",
        subtext: "Indonesia"
      },
      {
        photo: img4,
        heading: "Hiking in Oaxaca",
        subtext: "Mexico"
      },
      {
        photo: img5,
        heading: "Painting in Paris",
        subtext: "France"
      }
    ];
    return (
      <div className="Card1FromFeeds">
        {card1TextValues.map((data, i) => (
          <div className="Card1FromFeeds-main">
            <Card1
              subheading={data.subtext}
              heading={data.heading}
              image={data.photo}
            />
            {console.log(data.image)}
          </div>
        ))}
      </div>
    );
  }
}

export default Card1FromFeeds;
