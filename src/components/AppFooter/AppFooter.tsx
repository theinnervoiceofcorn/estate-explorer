import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./AppFooter.scss";

export const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaMapMarkerAlt /> Dubai, UAE
            </li>
            <li>
              <FaPhone /> +971 123456789
            </li>
            <li>
              <FaEnvelope /> info@example.com
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="#">
                <FaFacebook /> <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram /> <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Additional Links</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} UAE Real Estate. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
