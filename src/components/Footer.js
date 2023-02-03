import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-between items-end pt-4 text-lg w-[90%] mx-auto ">
      <div className="flex items-end child:mr-8">
        <p>1408 Franklin St. Suite A, Jonesboro, AR 72401</p>
        <a href="tel:8703407000">Tel: (870)-340-7000</a>
      </div>
      <div className="flex items-end child:ml-4 child:my-2">
        <a href="/#">
          <FaWhatsapp />
        </a>
        <a href="/#">
          <FaFacebookF />
        </a>
        <a href="/#">
          <FaInstagram />
        </a>
        <a href="/#">
          <FaTwitter />
        </a>
        <a href="/#">
          <FaTelegramPlane />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
// https://react-icons.github.io/react-icons
