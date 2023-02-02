import React from "react";
import truck1 from "../assets/trucks1.jpg";

function Hero() {
  return (
    <main className="h-3/4">
      <div className="w-full h-full heroBG"></div>
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
