import React, { Component } from "react";
import Button from "@material-ui/core/Button";
export class booking extends Component {
  render() {
    return (
      <div>
        <a href="https://takapunamassage.youcanbook.me/" target="_blank">
          <Button
            style={{
              borderRadius: 100,
              borderColor: "#f5f5f5",
              borderWidth: 100,
              fontWeight: "bold",
              color: "black",
              size: "large",
            }}
            variant="contained"
          >
            <h1>Book now</h1>
          </Button>
        </a>
      </div>
    );
  }
}

export default booking;
