import React from "react";
// import { Link } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Freight from "../pages/Freight";
import Shipper from "../pages/Shipper";
import Carrier from "../pages/Carrier";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";

function Nav() {
  return (
    <div>
      <nav className="w-full">
        <ul className="flex justify-end child:ml-4 child-hover:border-b-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/freight">Freight</Link>
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
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freight" element={<Freight />} />
          <Route path="/shipper" element={<Shipper />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Nav;
