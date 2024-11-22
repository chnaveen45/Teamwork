import React from 'react';
import './DevelopmentProcess.css';
import ji from '../Navbar/Picture/d9.png';

const DevelopmentProcess = () => {
  return (
    <div className="development-process">
      <div className="content-container">
        <h2 className="title">Our Development Process</h2>
        <div className="process-diagram">
          
          <div
            className="process-box corner-box top-left"
            style={{
              backgroundImage: 'url(/de1.png)',
            }}
          >
            <h3>Discovery</h3>
            <p>
              Understanding the project requirements, target audience, and goals
              through research and analysis. It sets the foundation for designing a
              solution.
            </p>
          </div>

      
          <div
            className="process-box corner-box top-right"
            style={{
              backgroundImage: 'url(/d2.png)',
            }}
          >
            <h3>Design</h3>
            <p>
              The design phase focuses on creating detailed blueprints, wireframes,
              and prototypes to define the system architecture and user experience.
            </p>
          </div>

         
          <div
            className="process-box center-box"
            style={{
              backgroundImage: 'url(/d5.png)',
            }}
          >
            <h3>Launch & Maintenance</h3>
            <p>
              This involves deploying the software to users and providing ongoing
              updates, support, and enhancements to ensure optimal performance.
            </p>
          </div>

       
          <div
            className="process-box corner-box bottom-left"
            style={{
              backgroundImage: 'url(/d3.png)',
            }}
          >
            <h3>Development</h3>
            <p>
              The development phase involves coding, integrating, and building the
              software components based on the design specifications.
            </p>
          </div>

          
          <div
            className="process-box corner-box bottom-right"
            style={{
              backgroundImage: 'url(/d4.png)',
            }}
          >
            <h3>Testing</h3>
            <p>
              The testing ensures the software's quality by identifying and fixing
              bugs, verifying functionality, and validating performance against
              requirements.
            </p>
          </div>
        </div>
      </div>

    
      <div className="side-image">
        <img
          src={ji}
          alt="Process Illustration"
        />
      </div>
    </div>
  );
};

export default DevelopmentProcess;
