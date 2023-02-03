import React from "react";
import { Link } from "react-router-dom";
import truck from "../assets/trucks4.png";

function Hero() {
  return (
    <main className="relative h-3/4">
      <div className="absolute top-1/3 text-primary z-10 w-1/3 mx-[5%] lg:w-1/2 md:w-[90%] md:top-1/4">
        <h1 className=" font-bold text-3xl mb-4 md:text-xl">
          We are here to move
        </h1>
        <p className="">
          Transportation Shipment is designed for shipment companies, cargo, and
          logistics, freight transport, warehouses, logistics storage, moving
          companies, warehousing services, transportation companies, etc.
        </p>
      </div>
      <div className="w-full h-[95%] overflow-clip bg-secondary">
        <img className="w-full" src={truck} alt="" />
      </div>
      <div
        className="absolute top-2/3 left-1/4 w-1/2 text-xl md:text-lg font-semibold text-primary 
      flex justify-between duration-500 child:duration-500 overflow-hidden
      child:px-4 child:py-3 child:rounded child:border-[.15rem] child:border-primary
      child-hover:text-secondary"
      >
        <Link className="hover:bg-primary" to="/shipper">
          Shipper
        </Link>
        <Link className="hover:bg-primary" to="/carrier">
          Carrier
        </Link>
      </div>
    </main>
  );
}
export default Hero;
