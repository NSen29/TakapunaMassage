import React, { Component } from "react";
import "../styles/price.css";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import {
  HoverText1,
  HoverText2,
  HoverText3,
  HoverText4,
  HoverText5,
} from "../components/PriceButtons";

export class pricing extends Component {
  clicky = (ev) => {
    console.log("Button has been clicked");
  };
  render() {
    return (
      <div className="card text-center " style={{ backgroundColor: "#8b0000", position: "relative", borderWidth: 28, borderColor: "black", borderRadius: 25 }}>
        <Container className="gap">
          <Row>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Head, Neck and Shoulders.jpg")}
                  alt="Head Neck and Shoulders"
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />

                <CardBody body color="light">
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Head, Neck and Shoulders </CardTitle>
                  <CardSubtitle>
                    <p className="mb-2 text-white" tag="h6" color="light">
                      10 min session for $20 / 20 min session for $35 / 30 min
                      session for $50{" "}
                    </p>
                  </CardSubtitle>
                  <CardText>
                    <p className="mb-2" tag="h6"  style={{ color: "#113B08" }} >
                      *Extra service types available
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  textAlign: "center",
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Upper or Lower Body.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}>Upper/Lower Body </CardTitle>
                  <CardSubtitle className=" text-white">
                    (Neck, Shoulders and Back / Back and Leg ) 30 min sessions
                    for $50 / 45 min session for $70 / 60 min session for $85
                  </CardSubtitle>
                  <CardText className="mb-2"  style={{ color: "#113B08" }} tag="h6">
                    *Extra service types available
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Whole Body.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Whole Body </CardTitle>
                  <CardSubtitle className="mb-2 text-white" tag="h6">
                    45 min session for $70 / 60 min session for $85 / 90 min
                    session for $125  <br></br> / 120 min session for $160
                  </CardSubtitle>
                  <CardText className="mb-2 "  style={{ color: "#113B08" }} >
                    *Extra service types available
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Reflexology.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Reflexology Foot Massage </CardTitle>
                  <CardSubtitle className="mb-2 text-white" tag="h6">
                    30 min session for $50 / 45 min session for $75 / 60 min
                    session for $90
                  </CardSubtitle>
                  <CardText className="mb-2"  style={{ color: "#113B08" }} >
                    *Extra service types available
                  </CardText>
                  <HoverText3 />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Whole Body with Reflexology.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}>Whole Body with Reflexology </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-white"
                    tag="h6"
                    color="light"
                  >
                    90 min session for $130 / 120 min session for $170
                  </CardSubtitle>
                  <CardText className="mb-2"  style={{ color: "#113B08" }} >
                    *Extra service types available
                  </CardText>
                  <HoverText3 />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Additional Services.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}>Additional Services</CardTitle>
                  <CardSubtitle
                    className="mb-2 text-white"
                    tag="h6"
                    text={{ color: "white" }}
                  >
                    Cupping for $30 / Gua Sha for $40 / Hot Stone for $30
                    <br></br>
                    *Timings will vary for each service (Please contact us
                    first)
                  </CardSubtitle>
                  <CardText></CardText>
                  <HoverText1 />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Accupuncture.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Accupuncture Treatment </CardTitle>
                  <CardSubtitle className="mb-2 text-white" tag="h6">
                    20 min sessions for $35 / 30 min session for $55 / 45 min
                    session for $70 / 60 min session for $85
                  </CardSubtitle>
                  <CardText></CardText>
                  <HoverText4 />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Moxibustion.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Moxibustion Treatment </CardTitle>
                  <CardSubtitle className="mb-2 text-white" tag="h6">
                    20 min session for $40 / 30 min session for $60 / 45 min
                    session for $75 / 60 min session for $90
                  </CardSubtitle>
                  <CardText></CardText>
                  <HoverText5 />
                </CardBody>
              </Card>
            </Col>
            <Col md={12}>
              <Card
                body
                style={{
                  backgroundColor: "#8b0000",
                  borderColor: "#e07006",
                  borderWidth: 0,
                  borderStyle: "groove",
                }}
                inverse
              >
                <CardImg
                  top
                  width="100%"
                  src={require("../images/Extra Service.jpg")}
                  style = {{borderRadius: 25,  borderColor: "#e07006",
                  borderWidth: 8, borderStyle: "groove"}}
                />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "#e07006" }}> Extra Service Types </CardTitle>
                  <CardSubtitle className="mb-2 text-white" tag="h6">
                    Therapeutic / Swedish/Relaxing / Sport / Deep Tissue (+$10)
                  </CardSubtitle>
                  <CardText></CardText>
                  <HoverText2 />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default pricing;
