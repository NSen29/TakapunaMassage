import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
} from "reactstrap";

import carousel1 from "../images/carousel1.jpeg";
import carousel2 from "../images/carousel2.jpeg";
import carousel3 from "../images/carousel3.jpeg";
import carousel4 from "../images/carousel4.jpeg";
import carousel5 from "../images/carousel5.jpeg";
import carousel6 from "../images/carousel6.jpeg";
import carousel7 from "../images/carousel7.jpeg";
import carousel8 from "../images/carousel8.jpeg";

import "../styles/About.css";

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
            width={"1000"}
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
          className="card text-center "
          style={{
            backgroundColor: "black",
            color: "#e07006",
            borderWidth: 28,
            borderColor: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Employees</h1>
          </div>
          <Container className="gap">
            <Row>
              <Col md={3}>
                <Card
                  body
                  style={{
                    backgroundColor: "#8b0000",
                    borderColor: "#e07006",
                    borderWidth: 6,
                    borderStyle: "groove",
                    borderRadius: 25,
                    position: "relative",
                    display: "flex",
                  }}
                  inverse
                >
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Roy.png")}
                    alt="Roy"
                    style={{
                      borderRadius: 45,
                      borderWidth: 6,
                      borderStyle: "solid",
                    }}
                  />

                  <CardBody body color="light">
                    <CardTitle tag="h5" style={{ color: "#e07006" }}>
                      Roy Hsu
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-white" tag="h6">
                      <br></br>
                      More than 20 years of experience in professional
                      therapeutic massage. <br />
                      Traditional Chinese Therapy and Arcmatherapy, Original
                      Point Therapy, Relaxation Massage. <br />
                      Licensed by Taiwan Rehabilitation Practitioners
                      Association. <br />
                      Hot Stone, Gua Sha, Cupping, Moxa Therapy, Transcutaneous
                      Electrical Nerve Stimulation, Health Management.
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>

              <Col md={3}>
                <Card
                  body
                  style={{
                    backgroundColor: "#8b0000",
                    borderColor: "#e07006",
                    borderWidth: 6,
                    borderStyle: "groove",
                    borderRadius: 25,
                    position: "relative",
                    display: "flex",
                  }}
                  inverse
                >
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Na Lan.png")}
                    style={{
                      borderRadius: 45,
                      borderWidth: 6,
                      borderStyle: "solid",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ color: "#e07006" }}>
                      Na Lan
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-white" tag="h6">
                      <br></br>
                      International Licensed Acupuncture Therapist. <br />
                      Six-year licensed acupuncturist and physiotherapist in
                      China Medical Clinic. <br />
                      Licensed Acupuncture Treatment in Australia. <br />
                      Chronic disease research, diagnosis, and treatment.
                      Gynecological treatement <br />
                      Pediatric Physiotherapy. <br />
                      Pulse, Acupuncture, Scraping, Moxibustion, Health
                      Management.
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>

              <Col md={3}>
                <Card
                  body
                  style={{
                    textAlign: "center",
                    backgroundColor: "#8b0000",
                    borderColor: "#e07006",
                    borderWidth: 6,
                    borderStyle: "groove",
                    borderRadius: 25,
                    position: "relative",
                    display: "flex",
                  }}
                  inverse
                >
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Vivian.png")}
                    style={{
                      borderRadius: 45,
                      borderWidth: 6,
                      borderStyle: "solid",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ color: "#e07006" }}>
                      Vivian
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-white" tag="h6">
                      <br></br>
                      More than 5 years of experience in professional
                      therapeutic massage. <br />
                      Traditional Chinsese Therapy and Association, Relaxation
                      Massage, Sport Massage. <br />
                      Hot Stone, Gua Sha, Cupping, Moxa Therapy, Transcutaneous
                      Electrical Nerve Stimulation, Health Management.
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>

              <Col md={3}>
                <Card
                  body
                  style={{
                    backgroundColor: "#8b0000",
                    borderColor: "#e07006",
                    borderWidth: 6,
                    borderStyle: "groove",
                    borderRadius: 25,
                    position: "relative",
                    display: "flex",
                  }}
                  inverse
                >
                  <CardImg
                    top
                    width="100%"
                    src={require("../images/Sunny.png")}
                    style={{
                      borderRadius: 45,
                      borderWidth: 6,
                      borderStyle: "solid",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5" style={{ color: "#e07006" }}>
                      {" "}
                      Sunny{" "}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-white" tag="h6">
                      <br></br>
                      More than 6 years of experience in professional
                      therapeutic massage. <br />
                      Traditional Chinsese Therapy and Association, Relaxation
                      Massage, Sport Massage. <br />
                      Hot Stone, Gua Sha, Cupping, Moxa Therapy, Transcutaneous
                      Electrical Nerve Stimulation, Health Management.
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </div>
    );
  }
}

export default about;
