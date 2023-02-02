import React from "react";
import truck from "../assets/trucks4.png";

function Hero() {
  return (
    <main className="relative h-3/4">
      <div className="absolute top-1/3 text-primary z-10 w-1/3 ml-24">
        <h1 className=" font-bold text-3xl mb-4">We are here to move</h1>
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
        className="absolute top-2/3 left-1/4 w-1/2 text-xl font-semibold text-primary 
      flex justify-between duration-500 child:duration-500 overflow-hidden
      child:border child:px-4 child:py-3 child:rounded child:border-[.15rem] child:border-primary
      child-hover:text-secondary"
      >
        <a className="hover:bg-primary" href="/#">
          Shipper
        </a>
        <a className="hover:bg-primary" href="/#">
          Carrier
        </a>
      </div>
    </main>
  );
}
// child:after:absolute child:after:w-0 child:after:h-full child:after:left-0 child:after:top-0 child:after:bg-secondary
//   child-hover:after:w-full
export default Hero;

// w-max after:absolute after:w-0 after:h-full after:left-0 after:top-0 after:bg-secondary
//       hover:after:w-[100%]
