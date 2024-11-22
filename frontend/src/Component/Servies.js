import React from 'react';
import serve from '../Navbar/Picture/serveimg.png';
import './Servies.css'
import dd from '../Navbar/Picture/serveimg1.png';
import { Link } from 'react-router-dom'
// import '../Navbar/Picture/Style.css';
import Foot  from '../Footer/Foot';

function Servies() {
  return (
    <div>

      <div className='ll'>
        <h1 className='mb'>Our Expertise<br></br> Your Solutions</h1>


        <p>Solutions crafted with care. Your success, our purpose.</p>
        <div className="nav-right" style={{ marginTop: '-210px', marginLeft: '500px' }}>
          <Link to="/home" className='dd' >Home</Link>
          <Link to="/servies" className='dd'>Service</Link>
          <Link to="/aboutus" className='dd'>AboutUs</Link>
          <Link to="/contactus" className='dd'>ContactUs</Link>



        </div>
      </div>

      <img src={serve} alt='Service' className="responsive-img" />




      <img src={dd} alt='service1' className='rr'></img>


      <div className="text-overlay-container" style={{ marginTop: '15%' }}> <div className="hh"> <div className="overlay"></div> <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '70px' }}><b>Web Development</b></h1> <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif' }}>With a focus on functionality and user experience, our web development team creates responsive, secure, and visually appealing websites. From e-commerce platforms to corporate websites, we ensure that each site reflects the brand’s identity while meeting the latest web standards and technological advancements.</p> </div> </div>
      <div className="text-overlay-container" style={{ marginTop: '5%' }}> <div className="ff"> <div className="overlay"></div> <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#22177A', paddingBottom: '10px', marginLeft: '70px' }}><b>App Development</b></h1> <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif' }}>We specialize in developing mobile applications that are user-friendly, efficient, and scalable. From concept to deployment, our app development process is tailored to meet each client’s unique needs, delivering high-quality applications for Android, iOS, and cross-platform solutions that drive user engagement and satisfaction.</p> </div> </div>
       <div className="text-overlay-container" style={{ marginTop: '5%' }}> <div className="gf"> <div className="overlay"></div> <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#0000B3', paddingBottom: '10px', paddingLeft: '70px' }}><b>Marketing</b></h1> <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif' }}>Our marketing services are designed to help your business grow in a digital-first world. We offer comprehensive strategies across social media marketing, search engine optimization (SEO), content marketing, and paid advertising, helping to increase brand visibility, reach target audiences, and achieve measurable results.</p> </div> </div> 
       <div className="text-overlay-container" style={{ marginTop: '5%',marginBottom:'5%', }}> <div className="tf"> <div className="overlay"></div> <h1 style={{ fontSize: '50px', fontFamily: 'inria serif', color: '#0000B3', paddingBottom: '10px', paddingLeft: '70px' }}><b>Graphic Designing</b></h1> <p className="er" style={{ paddingTop: '10px', fontFamily: 'inria serif' }}>Our graphic design team brings creativity and professionalism to every project. We offer a range of design services, including branding, logo creation, social media graphics, and marketing materials. Our goal is to help your business make a lasting visual impression that resonates with your audience.</p> </div> </div>


<div>
<Foot />
</div>
    </div>
  );
}

export default Servies;


