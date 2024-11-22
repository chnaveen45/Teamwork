import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';
import rq from '../Navbar/Picture/mk.png';
import ri from '../Navbar/Picture/stock.png';
import rs from '../Navbar/Picture/goal.png';
import Foot  from '../Footer/Foot';
import "./Contactus.css"; 
function Aboutus() {
  return (

    <div>
  <div className='ll' >
        <h1 className='mb'>About Us<br></br></h1>

        
        <p>"At our core, we believe in combining technology and creativity to deliver solutions that make a difference."</p>
        <div className="nav-right" style={{ marginTop: '-170px', marginLeft: '500px' }}>
          <Link to="/home" className='dd' >Home</Link>
          <Link to="/servies" className='dd'>Service</Link>
          <Link to="/aboutus" className='dd'>AboutUs</Link>
          <Link to="/contactus" className='dd'>ContactUs</Link>



        </div>
      </div>
      <img src={rq} alt='Service' className="hg" />  
      <div style={{marginTop:'5%'}}>
 
        </div> 

        <div class="clearfix" style={{marginLeft:'50px',}}>
          <h1 className='vv' style={{color:'#0000B3',paddingBottom:'20px',}}><b>Our Mission</b></h1>
          <p style={{fontFamily:'Inria Serif',fontSize:'20px'}}>
  At Vishwasri Technologies Pvt Ltd, our mission is to empower businesses with innovative, reliable, and scalable software solutions that enhance efficiency and drive growth.
  </p>
  <img src={ri} class="col-md-6 float-md-end mb-3 ms-md-3" alt="loading" style={{marginTop:'05px',borderRadius:'6px',}}></img>

  {/* <p style={{fontFamily:'Inria Serif',fontSize:'20px'}}>
  At Vishwasri Technologies Pvt Ltd, our mission is to empower businesses with innovative, reliable, and scalable software solutions that enhance efficiency and drive growth.
  </p> */}
<h4 className='vv' style={{color:'#0000B3'}}>Innovation at Core</h4>
  <p style={{fontFamily:'Inria Serif',fontSize:'20px'}}>
  We strive to stay ahead of technological trends, constantly developing creative solutions that solve real-world problems. Innovation is not just about new ideas; it’s about making impactful, sustainable changes.
  </p>
  <h4 className='vv' style={{color:'#0000B3'}}>Customer-Centric Approach</h4>
  <p style={{fontFamily:'Inria Serif',fontSize:'20px'}}>
  Customer-Centric Approach We focus on understanding our clients' unique needs, offering personalized services that align with their business goals. Our success is driven by the success and satisfaction of our customers.
  </p>
  <h4 className='vv' style={{color:'#0000B3'}}>Excellence in Execution</h4>
  <p style={{fontFamily:'Inria Serif',fontSize:'20px'}}>
  Excellence in Execution We are committed to delivering high-quality solutions that exceed expectations. From the first concept to final deployment, we ensure that every step is carried out with precision, care, and attention to detail.
  </p>
</div>


<div style={{marginTop:'5%'}}>
<div class="card mb-3" style={{width:'97%',border:'0px'}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={rs}style={{width:'650px',height:'450px',}} class="card-img" alt="loading..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" className='vv' style={{color:'#0000B3',paddingBottom:'20px',}}><b>Our Vision</b></h5>
        <p class="card-text" style={{fontFamily:'Inria Serif',fontSize:'20px',marginBottom:'25%'}}>Our vision is to become a global leader in delivering cutting-edge software solutions that redefine industries and drive innovation. Our long-term goal is to empower businesses worldwide with sustainable, future-ready technologies that foster growth and resilience. We aim to shape a digitally advanced world where organizations thrive and evolve seamlessly.</p>
    </div>
    </div>
  </div>
</div>
   </div>
   <div >
   <Foot />
   </div>
   </div>
  )
}

export default Aboutus