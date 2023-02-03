import React from "react";
import Hero from "../components/Hero";
import Shipment from "../components/Shipment";

function Home() {
  return (
    <div className="child:my-4">
      <Hero />
      <Shipment />
    </div>
  );
}

export default Home;
