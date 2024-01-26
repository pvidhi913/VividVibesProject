import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-5 col-12 ft-1'>
                        <a className='navbar-brand' href='/'>Vivid Vibes</a>
                        <p>"Transforming dreams into reality, Vivid Vibes envisions creating unforgettable moments that resonate with the essence of every individual's unique celebration."
                        </p>
                        <div className='footer-icons'>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://www.instagram.com/csr_originals/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://www.linkedin.com/in/kashyapmrc" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-pinterest"></i>
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
</div>

                    </div>
                    <div className='col-md-6 col-lg-3 col-12 ft-2'>
                        <h4>Quick Links</h4>
                            <ul>
                            <li className='nav-item'>
                                    <a className='' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='' href='/OurTeam'>Our Team</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='' href='/ContactUs'>Contact Us</a>
                                </li>
                            </ul>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 ft-3'>
                        <h4>Contact Information</h4>
                        <h6><i className="fa-solid fa-phone"></i>(786)-564-3902</h6>
                        <h6><i className="fa-solid fa-envelope"></i>webdesign.vividvibes.17@gmail.com</h6>
                        <h6><i className="fa-solid fa-location-dot"></i>Boston, United States of America</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom'>
        <h6>&copy; 2023 Copyright: vividvibes.com</h6>  
       </div>
       </>
  );
};

export default Footer;
