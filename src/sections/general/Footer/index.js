import React from "react"
import logo from "./../../../assets/images/TR LOGO new.png";
import { FaGithub, FaSlack, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
  <FooterWrapper>
  <footer className="footer">
      <div className="about">
        <h3>ABOUT US</h3>
        <p>TemplateRun is an open-source development community
          where reusable components for websites are collected.
          We provide users with a variety of components with 1000s
          of designs to choose from.
        </p>
      </div>
      <div className="projects">
        <h3>PROJECTS</h3>
        <ul>
          <li>TemplateRun.io</li>
          <li>TR-CSS</li>
          <li>TR-Bootstrap</li>
          <li>TR-React</li>
        </ul>
      </div>
      <div className="icons">
        <div className="img"><img src={logo} width="20%" /></div>
        <div className="social-links">
          <a href=""><FaTwitter className="fab" /></a>
          <a href=""><FaEnvelope className="fas fab fa-envelope" /></a>
          <a href=""><FaSlack className="fab" /></a>
          <a href=""><FaGithub className="fab" /></a>
          <a href=""><FaLinkedin className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <hr />
      <div className="copy">
        <p>2021 Copyright ©TemplteRun | All Rights Reserved</p>
      </div>
    </footer>
    </FooterWrapper>

  )
}

export default Footer;
