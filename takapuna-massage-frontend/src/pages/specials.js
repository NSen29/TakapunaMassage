import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


import carousel1 from "../images/Sunburn.jpg";
import carousel2 from "../images/summer.jpg";
import carousel3 from "../images/summer2.jpg";
import carousel4 from "../images/summer3.jpg";


export class specials extends Component {
    render() {
      return (
        <div style={{ textAlign: "center", borderWidth: 15, borderColor: "#8b0000"}}>
     <div
                  className="box1"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#212121",
                    borderColor: "#8b0000",
                    borderWidth: 10,
                    borderStyle: "groove",
                  }}
                >
                  <h2 style={{ color:  "#e07006"}}> Summer Specials</h2>
                  
                  
                </div>
      
        
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
            width={"1000"}
          >
            <div>
              <img src={carousel1} alt="Sunburn" />
            </div>
            <div>
              <img src={carousel2} alt="Summer" />
            </div>
            <div>
              <img src={carousel3} alt="Summer2" />
            </div>
            <div>
              <img src={carousel4} alt="Summer3" />
            </div>
            
          </Carousel>
        </div>

  
          <br/>
          <br/>
          <br/>
        </div>
      );
    }
  }
  
  export default specials;