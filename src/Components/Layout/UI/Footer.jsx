import React from "react";
import fotterData from "../../../API/FooterApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer>
      <div className="footer-container">
        {fotterData.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>

                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Copyright and Attribution Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 A & S Creations. All Rights Reserved.</p>
        <p>
          Designed and Developed by <strong>Aman Shekhar</strong>
        </p>
        <p>
          Follow us on:
          <a
            href="https://www.linkedin.com/in/aman-shekhar-59889027a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/amanshekhar0"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
