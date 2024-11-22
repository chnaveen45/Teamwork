import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
import cardImage from './Picture/image1.png';
import cardImage1 from './Picture/image2.png';
import cardImage2 from './Picture/image3.png';
import cardImage3 from './Picture/ee.png';
import lo from './Picture/serve1.png';
import df from './Picture/serve2.png';
import ew from './Picture/serve3.png';
import Card from 'react-bootstrap/Card';
import Foot from '../Footer/Foot';
import ff from './Picture/remove.png';
import WhyChooseUS from '../WhyChooseUs/WhyChooseUs.js';
import DevelopmentProcess from '../DevelopmentProcess/DevelopmentProcess.js';


// import Button from 'react-bootstrap/Button';
function Nav() {
  return (

    <div >

      <div className="nav-container">
        <div className="nav-left">

          {/* <img src={ff} alt="logo" className="nav-logo"  style={{width:'100px',height:'100px'}}/> */}
        </div>
        <img src={ff} alt="logo" className="nav-logo" style={{ width: '70px', height: '72px' }} />
        <div className="nav-right" style={{ marginTop: '-60px', marginLeft: '-50px', }}>
          <Link to="/home" className='dd'>Home</Link>
          <Link to="/servies" className='dd'>Service</Link>
          <Link to="/aboutus" className='dd'>About Us</Link>
          <Link to="/contactus" className='dd'>Contact Us</Link>



        </div>
        <div className="text-container"> <h1>Empowering The Businesses<br></br>
          Through The Technology</h1> <br></br><p>At Vishwasri Technologies, we empower businesses by leveraging cutting-edge <br></br> technology to drive growth and innovation. Our custom software solutions are <br></br> designed to streamline operations, enhance efficiency, and unlock new opportunities.</p> </div>

      </div>
      <div className="container" style={{ minHeight: '100vh', width: '100%' }}>
        {/* Text Section */}
        <div className="text-section">

          <h1 style={{ fontFamily: 'inria serif', }}><b>Our Company</b></h1>
          <p>
            Welcome to Vishwasri Technologies Pvt Ltd, a dynamic startup dedicated
            to crafting innovative software solutions tailored to meet the diverse
            needs of modern businesses.
          </p>
          <p>
            At Vishwasri Technologies, we specialize in custom software
            development, delivering high-quality, scalable, and user-centric
            applications that empower organizations to thrive in a competitive
            landscape. Whether you’re a startup, small business, or an
            established enterprise, our expertise ensures we bring your ideas to
            life with precision and creativity.
          </p><div>
            <div style={{ marginLeft: -180, paddingLeft: 0, marginTop: -30, }}><img src={cardImage3} alt='AI'></img></div>
          </div>

        </div>


        {/* Image Section */}
        <div className='ww'>
          <div className="image-section">
            <img src={cardImage} alt="Tech visual 1" className="image1" />
            <img src={cardImage1} alt="Tech visual 2" className="image2" />
            <img src={cardImage2} alt="Tech visual 3" className="image3" />
          </div>
        </div>

      </div>




      <div style={{ marginTop: -100 }}>
        <div className='tt' ><h1><b>Service</b></h1></div>
        <div className='kk'>
          <div className='qq'>


            <Card style={{ width: '20rem', height: '30rem', borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={lo} style={{ height: '12rem', objectFit: 'cover' }} />
              <Card.Body style={{ backgroundColor: '#283593', marginLeft: '-0px', marginTop: '-0px' }}>
                <Card.Title style={{ color: 'white', paddingBottom: '8px', fontSize: '1.5rem' }}>
                  Graphic Design
                </Card.Title>
                <Card.Text style={{ color: 'white', fontSize: '1rem' }}>
                  Our graphic design team brings creativity and professionalism to every project. We offer a range of design services, including branding, logo creation, and social media graphics. <Link to="/servies" style={{ color: 'red' }}>  Know more</Link><br />

                </Card.Text>
              </Card.Body>
            </Card>


          </div>
          <div className='qq'>
            <div className='df'>
              <Card style={{ width: '23rem', borderRadius: '15px', overflow: 'hidden', height: 'calc(32rem + 30px)', marginTop: '-30px', marginBottom: '30px' }}>
                <Card.Img variant="top" src={df} style={{ height: '12rem', objectFit: 'cover' }} />
                <Card.Body style={{ backgroundColor: '  #283593', marginLeft: '-0px', marginTop: '-0px' }}>
                  <Card.Title style={{ color: 'white', paddingBottom: '8px', fontSize: '1.5rem' }}> Web & App Development</Card.Title>
                  <Card.Text style={{ color: 'white', fontSize: '1rem' }}>
                    With a focus on functionality and user experience, our web development team creates responsive, secure, and visually appealing websites. From e-commerce platforms to corporate websites, we ensure that each site reflects the brand’s identity while meeting.
                    <Link to="/servies" style={{ color: 'red' }}>  Know more</Link>
                  </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='qq'>
            <Card style={{ width: '20rem', height: '30rem', borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={ew} style={{ height: '12rem', objectFit: 'cover' }} />
              <Card.Body style={{ backgroundColor: '  #283593', marginLeft: '-0px', marginTop: '-0px' }}>
                <Card.Title style={{ color: 'white', paddingBottom: '8px', fontSize: '1.5rem' }}>Marketing</Card.Title>
                <Card.Text style={{ color: 'white', fontSize: '1rem', }}>
                  Our marketing services are designed to help your business grow in a digital-first world. We offer comprehensive strategies across social media marketing, search engine optimization (SEO), content marketing.
                  <Link to="/servies" style={{ color: 'red' }}>  Know more</Link>
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>

      </div>
      <DevelopmentProcess />
      <WhyChooseUS />
      <Foot />

    </div>


  )
}

export default Nav