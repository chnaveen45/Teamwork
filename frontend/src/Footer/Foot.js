import React from 'react';
import './Foot.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import bh from '../Navbar/Picture/vh.jpg';

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
  <div className="footer-section">
    <h4>About Us</h4>
    <Link to="/servies" style={{marginBottom:'40%'}} >Web Development</Link><br></br>
    <Link to="/servies" >App Development</Link><br></br>
    <Link to="/servies" >Graphic Design</Link><br></br>
    <Link to="/servies" >Marketing</Link>
   
    <div className="social-icons">
      <h4>Follow Us</h4>
      <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
      <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://www.google.com"><FontAwesomeIcon icon={faGoogle} /></a>
    </div>
  </div>
  <div className="footer-section">
    <h4>Industries we serve</h4>
    <a href="#ecommerce"><p>E-commerce</p></a>
    <a href="#finance"><p>Finance</p></a>
    <a href="#education"><p>Education</p></a>
    <a href="#healthcare"><p>Health care</p></a>
    <a href="#retail"><p>Retail</p></a>
  </div>

  <div className="footer-section">
    <h4>Contact Us</h4>
    <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:VISHWASRITECHNOLOGIES@vishcom.net">VISHWASRITECHNOLOGIES@vishcom.net</a></p>
    <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+7330669716">+91 7330669716</a></p>
    <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+9908208857">+91 9908208857</a></p>
  </div>

  <div className="footer-section">
    <h4>Located At</h4>
    <div className="location-info">
      <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
      <p>1-10-74/B&C FLAT NO: T-402/B, TECHNOPOLIS GALADA COMPLEX, DWARAKA DAS COLONY, BEGUMPET 500016</p>
    </div>
  </div>
  <div>
    <img src={bh} alt='loading...' style={{height:'50px',marginLeft:'1100px',marginTop:'-100px'}}></img>
  </div>
</div>

    </footer>
  );
};

export default Foot;