
import React, { useState } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import cd from '../Navbar/Picture/work.png';
// import {  faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Foot  from '../Footer/Foot';
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";





function Contactus() {
 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Valid email is required.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(data.message || "An error occurred.");
      }
    } catch (error) {
      setResponseMessage("Error: Unable to send your message.");
    }
  };

  return (
    <div>
      <div className='ll' >
        <h1 className='mb'>We’re Here For You<br></br></h1>


        <p>"At Vishwasri Technologies, your success is our priority. Reach out to us anytime—our team is here to guide and support you every step of the way."</p>
        <div className="nav-right" style={{ marginTop: '-190px', marginLeft: '500px' }}>
          <Link to="/home" className='dd' >Home</Link>
          <Link to="/servies" className='dd'>Service</Link>
          <Link to="/aboutus" className='dd'>AboutUs</Link>
          <Link to="/contactus" className='dd'>ContactUs</Link>



        </div>
      </div>
      <img src={cd} alt='Service' className="hg" />
    
       
        
<div style={{height:'500px',width:'100%',marginTop:'30px',padding:'50px'}}>
        <div className="contact-container">
   
      <div className="info-card" style={{boxShadow:'0px 0px 5px 1px black'}}>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <p>1-10-74/B&C Flat No: T-402/B, Technopolis Galada Complex, Dwarka Das Colony, Begumpet 500016</p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <p>
            VISHWASRITECHNOLOGIES<br />@vishcom.net
          </p>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>7330669716</p>
        </div>
      </div>

   
 <div className="form-card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit" className="button">Submit</button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>
      </div>
     
    </div>
    <Foot />
     </div>
  )
}

export default Contactus