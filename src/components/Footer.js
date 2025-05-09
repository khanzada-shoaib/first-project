import React from 'react';
import './Footer.css';
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">FRN</div>
        <p className="footer-copy">@At All Rights Resvered By, FRN Ltd 2022</p>
        <div className='logos'>
        <SlSocialFacebook />
        <FaInstagram />
        <CiTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
