import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "../App";
import ContactUs from "./ContactUs";

function Nav() {
  return (
    <>
      <nav className="w-full">
        <ul className="flex justify-end child:pl-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Nav;
