import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Foodizz </h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feedback.</em>
        <strong>All right reserved</strong>
      </div>

      <aside>
       <div>
        <a href="https://www.linkedin.com/in/raj-kamal-singh-94680521b">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/rajkamalsingh5">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/rajkamalsingh__/">
          <AiFillInstagram/>
        </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;