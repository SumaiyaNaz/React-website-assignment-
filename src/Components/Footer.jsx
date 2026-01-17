import React from "react";
import MyButton from "../Utils/MyButton";
import { FaMeta } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiButterflyFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import logo from '../assets/Photos/Reactlogo.jfif'

const Footer = () => {
  return (
    <>
      <div className="about">
        <img src={logo} alt="" />
        <h2 style={{ color: "#23272f", marginTop: "10px" }}>
          Welcome to the React community
        </h2>
        <MyButton value={"Get Started"} />
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <FaMeta className="meta-icon" />
              <h6>Meta Open Source</h6>
            </div>
            <p className="copyright">Copyright © Meta Platforms, Inc</p>
            <p className="copyright">uwu?</p>
          </div>

          <div className="footer-section">
            <h6 className="section-title">Learn React</h6>
            <ul>
              <li>
                <a href="#">Quick Start</a>
              </li>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Describing the UI</a>
              </li>
              <li>
                <a href="#">Adding Interactivity</a>
              </li>
              <li>
                <a href="#">Managing State</a>
              </li>
              <li>
                <a href="#">Escape Hatches</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="section-title">API Reference</h6>
            <ul>
              <li>
                <a href="#">React APIs</a>
              </li>
              <li>
                <a href="#">React DOM APIs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="section-title">Community</h6>
            <ul>
              <li>
                <a href="#">Code of Conduct</a>
              </li>
              <li>
                <a href="#">Meet the Team</a>
              </li>
              <li>
                <a href="#">Docs Contributors</a>
              </li>
              <li>
                <a href="#">Acknowledgements</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h6 className="section-title">More</h6>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">React Native</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
            <ul className="icons">
                <li><FaFacebook /></li>
                <li><FaXTwitter /></li>
                <li><PiButterflyFill /></li>
                <li><FaGithub /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
