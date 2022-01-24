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
      <AppBar>
        <Toolbar className="nav-container">
          <IconButton edge="start" color="inherit">
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
            Home
          </Button>
          <Button color="inherit" component={Link} to="/booking">
            Book now
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About us
          </Button>
          <Button color="inherit" component={Link} to="/pricing">
            Services & Pricing
          </Button>
          <Button color="inherit" component={Link} to="/contact-us">
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
