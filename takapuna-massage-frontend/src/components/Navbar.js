import React, { Component } from "react";
import Link from "react-router-dom/Link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import logo from "../images/logo.png";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <IconButton edge="start" color="orange">
              <Button color="inherit" component={Link} to="/">
                <img
                  classname="icon"
                  src={logo}
                  alt="Logo"
                  height="50px"
                  width="50px"
                />
              </Button>
            </IconButton>
            <Button color="inherit" component={Link} to="/">
              <b className="nav-button">Home</b>
            </Button>
            <Button
              className="navbutton"
              color="inherit"
              component={Link}
              to="/booking"
            >
              <b className="nav-button">Book now</b>
            </Button>
            <Button color="inherit" component={Link} to="/about">
              <b className="nav-button">About us</b>
            </Button>
            <Button color="inherit" component={Link} to="/pricing">
              <b className="nav-button">Services & Pricing</b>
            </Button>
            <Button color="inherit" component={Link} to="/contact-us">
              <b className="nav-button">Contact us</b>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
