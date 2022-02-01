import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "../styles/booking.css";
export class booking extends Component {
  render() {
    return (
      <div style={{ marginLeft:"40%"}}>
        <br/>
        <br/>
        <br/>
 

        <a className= "booking-link" href="https://takapunamassage.youcanbook.me/" target="_blank">
          <Button 
            style={{
              justifyContent: "center",
              borderRadius: 100,
              borderColor: "#8b0000",
              backgroundColor: "#e21111",
              borderWidth: 100,
              fontWeight: "bold",
              color: "white",
              size: "large",
            }}
            variant="contained"
          >
            <h1 className="booking-button">Book now</h1>
          </Button>
        </a>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default booking;
