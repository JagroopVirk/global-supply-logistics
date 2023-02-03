import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
import logo from "../logo.svg";
import Nav from "./Nav";
// import Home from "../pages/Home";

function Header() {
  return (
    <header className="w-[90%] mx-auto flex justify-between content-center flex-wrap">
      <div className="w-[12%] m-2">
        <a href="/">
          <img className="" src={logo} alt="logo" />
        </a>

        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </div>
      <div className="mt-8">
        <Nav />
      </div>
    </header>
  );
}

export default Header;
