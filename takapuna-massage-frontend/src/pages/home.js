import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "@material-ui/core/Button";
import Link from "react-router-dom/Link";

import banner from "../images/homebanner.jpeg";
import storefront from "../images/storefront.png";

import "../components/Home.css";

export class home extends Component {
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
            dynamicHeight={false}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            width={"1000px"}
          >
            <div>
              <div className="head-text">
                <div className="head-image">
                  <img src={banner} alt="banner" />
                </div>
                <div className="text-on-image">
                  <h1>
                    Treat yourself to a massage, free your mind, calm your body
                    and soul
                  </h1>
                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#FFFFFF",
                      fontWeight: "bold",
                    }}
                    color="black"
                    component={Link}
                    to="/booking"
                  >
                    Book now
                  </Button>
                  <p></p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="picture-text"
        >
          <img src={storefront} alt="store front" width="600px" />
          <h2 style={{ margin: "5%" }}>
            Takapuna Therapeutic Massage is a Professional Traditional Massage
            shop in Takapuna North Shore. We also sell massage products such as
            patches, medical ointment and massagers. Our therapeutic massages
            include traditional Taiwanese and Chinese style acupressure
            medicinal techniques. Our masseurs have at least 5 to 20 years of
            massage experience. The environment in our store is comfortable and
            relaxing and our massage therapists are professional and friendly.
            We provide soft music during treatments with complimentary
            refreshing health tea after each session. Treat yourself to a
            massage -let yourself go, free your mind and calm your body and
            soul.
          </h2>
        </div>
      </div>
    );
  }
}

export default home;

/*<div className='head-text'>
                    <div className='head-image'>
                        <img src={artic} alt="Stones" width="1252px" height="834px" />
                    </div>
                    <div className='text-on-image'>
                        <h1>Takapuna Therapeutic Massage is a Professional Traditional Massage shop in Takapuna North Shore. 
                            We also sell massage products such as patches, medical ointment and massagers.
                            Our therapeutic massages include traditional Taiwanese and Chinese style acupressure medicinal techniques. 
                            Our masseurs have at least 5 to 20 years of massage experience. 
                            The environment in our store is comfortable and relaxing and our massage therapists are professional and friendly. 
                            We provide soft music during treatments with complimentary refreshing health tea after each session. 
                            Treat yourself to a massage -let yourself go, free your mind and calm your body and soul. </h1>
                    </div>
                </div>*/
