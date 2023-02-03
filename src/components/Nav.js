import React from "react";
import { Link } from "react-router-dom";

// const pages = {
//   home: "Home",
//   freight: "Freight",
//   shipper: "Shipper",
//   carrier: "Carrier",
//   about: "About Us",
//   contact: "Contact Us",
// };

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
      <div></div>
    </div>
  );
}

export default Nav;
