import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Badar</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://dribbble.com/"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-dribbble"></i>
          </a>

          <a
            href="https://github.com/"
            className="footer_social_link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Badar - Butt. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
