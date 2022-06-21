
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../../CSS/footer.css";
const Footer = () => (

  <div className="home-container">
    <p style={{ height: "90px" }}></p>
    <div class="social-container">
      <h3>Follow US</h3>
      <a href="https://www.linkedin.com/company/west-agile-labs"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://www.facebook.com/westagilelabsSF/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/WestAgileLabs" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/westagilelabs/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>

  </div>

)
export default Footer;