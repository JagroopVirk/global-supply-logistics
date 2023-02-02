import React from "react";
import logo from "../logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="w-full flex justify-between content-center flex-wrap">
      <div className="w-[12%] m-2">
        <a href="/">
          <img className="" src={logo} alt="logo" />
        </a>
      </div>
      <div className="grid content-center">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
