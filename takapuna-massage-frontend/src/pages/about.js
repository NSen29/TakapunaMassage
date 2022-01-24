import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import carousel1 from "../images/carousel1.jpeg";
import carousel2 from "../images/carousel2.jpeg";
import carousel3 from "../images/carousel3.jpeg";
import carousel4 from "../images/carousel4.jpeg";
import carousel5 from "../images/carousel5.jpeg";
import carousel6 from "../images/carousel6.jpeg";
import carousel7 from "../images/carousel7.jpeg";
import carousel8 from "../images/carousel8.jpeg";

export class about extends Component {
  render() {
    return (
      <div className="page-background">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            showArrows={true}
            dynamicHeight={true}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            width={"1000px"}
          >
            <div>
              <img src={carousel1} alt="carousel1" />
            </div>
            <div>
              <img src={carousel2} alt="carousel2" />
            </div>
            <div>
              <img src={carousel3} alt="carousel3" />
            </div>
            <div>
              <img src={carousel4} alt="carousel4" />
            </div>
            <div>
              <img src={carousel5} alt="carousel5" />
            </div>
            <div>
              <img src={carousel6} alt="carousel6" />
            </div>
            <div>
              <img src={carousel7} alt="carousel7" />
            </div>
            <div>
              <img src={carousel8} alt="carousel8" />
            </div>
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Employees</h1>
        </div>
      </div>
    );
  }
}

export default about;
