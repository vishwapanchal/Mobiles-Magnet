import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <>
      <footer className="custom-navbar py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <br /><br/>
              <h5 style={{color:"purple",fontWeight:"bold",fontFamily:"unset"}}>&copy; Coding Knights 2023. All rights reserved.</h5>
              <p>
                <i className='bx bxl-meta bx-tada' style={{ color: 'blue', fontSize: '50px' }}></i>
                <i className='bx bxl-twitter bx-tada' style={{ color: 'cyan', fontSize: '50px' }}></i>
                <i className='bx bxl-pinterest-alt bx-tada' style={{ color: 'red', fontSize: '50px' }}></i>
              </p>
            </div>
            <div className="col-md-8 text-md-">
              <p style={{ fontSize: '20px', padding: 0, margin: 0, color: 'red', fontWeight: 'bold' }}>TEAM<br /><hr /> </p>
              <a  href="https://github.com/vishwapanchal" target="_blank" style={{ color: 'Purple', fontSize: '15px',fontFamily:"revert-layer" }}>
                <i className='bx bxl-github'></i> <b>Vishwa Panchal</b> - Team Lead, Front-End developer  & Project Coordinator </a><br />
              <a  href="https://github.com/mustafa505k" target="_blank" style={{ color: 'Purple', fontSize: '15px' }}>
                <i className='bx bxl-github'></i> <b>Mustafa Ameen</b> - Front-End Developer
              </a><br />
              <a  href="https://github.com/vishwapanchal" target="_blank" style={{ color: 'Purple', fontSize: '15px' }}>
                <i className='bx bxl-github'></i> <b>Sadanand</b> - Documentation Handler</a> <br />
              <a  href="https://github.com/sharankuamr" target="_blank" style={{ color: 'Purple', fontSize: '15px' }}>
                <i className='bx bxl-github'></i> <b>SharanKumar Tadkal</b> - PPT Maker</a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-md-center"><hr />
              <p style={{ fontSize: '15px', color: 'black',fontFamily:"monospace" }}>Location: 8R8M+HG2, PDA Engineering College Road, Aiwan-E-Shahi Area, Shambhognlli, <br />Kalaburagi, Karnataka 585102</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
