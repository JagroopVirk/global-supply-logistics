import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Shipment from "./Shipment";

function Main() {
  return (
    <div className="w-6xl mx-auto h-screen">
      <Header />
      <Hero />
      <Shipment />
      <Footer />
    </div>
  );
}

export default Main;
