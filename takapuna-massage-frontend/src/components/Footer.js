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
        <div className="column left" >
          <h2 style ={{ color: '#8b0000'}}>Takapuna Therapeutic Massage</h2>
          <p style = {{ color: 'whitesmoke'}}>106 Hurstmere Road, Takapuna, Auckland</p>
          <p style = {{ color: 'whitesmoke'}}>Phone: 09-4860666</p>
          <p style = {{ color: 'whitesmoke'}}>takapunamassage106@gmail.com</p>
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
          <h2 style = {{ color: 'whitesmoke'}}>Opening hours</h2>
          <p style = {{ color: 'whitesmoke'}}>Monday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Tuesday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Wednesday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Thursday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Friday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Saturday 10am-7pm</p>
          <p style = {{ color: 'whitesmoke'}}>Sunday 10am-7pm</p>
        </div>
      </div>
    );
  }
}

export default Footer;
