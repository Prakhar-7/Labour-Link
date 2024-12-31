import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-main">
          <h2>About Us</h2>
          <div>
            <p>
              Connecting skilled workers with those who need them, making hiring
              simple and secure.
            </p>
          </div>
        </div>
        <div className="footer-main">
          <h2>Quick Links</h2>
          <div>
            <li>How it Works</li>
            <li>Find Workers</li>
            <li>Pricing</li>
            <li>Pricing Support</li>
          </div>
        </div>
        <div className="footer-main">
          <h2>Categories</h2>
          <div>
            <li>Construction </li>
            <li>Cleaning</li>
            <li>Moving</li>
            <li>Painting</li>
          </div>
        </div>
        <div className="footer-main">
          <h2>Contact</h2>
          <div>
            <span>Email: support@workers.com</span>
            <span>Phone: (555) 123-4567</span>
            <span>Address: 123 Worker Street</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Worker Listing Platform. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
