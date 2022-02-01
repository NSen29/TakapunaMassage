import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
import booking from "./pages/booking";
import about from "./pages/about";
import pricing from "./pages/pricing";
import contact from "./pages/contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <p>
              <br />
            </p>
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/booking" component={booking} />
              <Route exact path="/about" component={about} />
              <Route exact path="/pricing" component={pricing} />
              <Route exact path="/contact-us" component={contact} />
            </Switch>
          </div>
          <br />
        </Router>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
