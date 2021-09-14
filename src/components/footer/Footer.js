import React from "react";
import "./Footer.css";
import Contactbutton from "./Contactbutton";
import Emailbutton from "./Emailbutton";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div div className="localization-container">
          <h2 className="localization">Localização</h2>
          <br />
          <div className="yellow-bar"></div>
          <div className="contact-container">
            <br />
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <br />
            <p>Alphavile SP</p>
            <br />
            <p>brasil@corebiz.ag</p>
            <br />
            <p>+55 11 3090 1039</p>
          </div>
        </div>
        <div className="footer-buttons">
          <Emailbutton />
          <Contactbutton />
        </div>
        <div className="footer-logo">
          <div className="footer-corebiz">
            <h4>Created by</h4>
            <img src="images/corebiz-logo.png" alt="" />
          </div>
          <div className="footer-vtex">
            <h4>Powered by</h4>
            <img src="images/vtex-logo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
