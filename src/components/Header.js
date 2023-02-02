import React from "react";
import logo from "../logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <div className="w-full flex justify-between content-center flex-wrap">
      <div className="w-[12%] m-2">
        <img className="" src={logo} alt="logo" />
      </div>
      <div className="grid content-center">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
