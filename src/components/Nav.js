import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "../App";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";

function Nav() {
  return (
    <div>
      <nav className="w-full">
        <ul className="flex justify-end child:pl-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fright">Fright</Link>
          </li>
          <li>
            <Link to="/shipper">Shipper</Link>
          </li>
          <li>
            <Link to="/carrier">Carrier</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="contact" element={<ContactUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div> */}
    </div>
  );
}

export default Nav;
