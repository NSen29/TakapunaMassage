import React, { Component } from "react";

import instagram from "../images/Instagram_logo.png";
import facebook from "../images/Facebook_logo.png";

// www.instagram.com/takapunamassage www.facebook.com/TAKAPUNA.THERAPEUTIC.MASSAGE

export class Footer extends Component {
  render() {
    return (
      <div
        class="row page"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="column left">
          <h2>Takapuna Therapeutic Massage</h2>
          <p>106 Hurstmere Road, Takapuna, Auckland</p>
          <p>Phone: 09-4860666</p>
          <p>takapunamassage106@gmail.com</p>
          <br></br>
          <a target="_blank" href="www.instagram.com/takapunamassage">
            {" "}
            <img src={instagram} alt="Instagram" width={"50px"} />{" "}
          </a>
          <a
            target="_blank"
            href="www.facebook.com/TAKAPUNA.THERAPEUTIC.MASSAGE"
          >
            <img src={facebook} alt="Facebook" width={"50px"} />{" "}
          </a>
          <br></br>
          <h2>Opening hours</h2>
          <p>Monday 10am-7pm</p>
          <p>Tuesday 10am-7pm</p>
          <p>Wednesday 10am-7pm</p>
          <p>Thursday 10am-7pm</p>
          <p>Friday 10am-7pm</p>
          <p>Saturday 10am-7pm</p>
          <p>Sunday 10am-7pm</p>
        </div>
      </div>
    );
  }
}

export default Footer;
