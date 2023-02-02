import React from "react";
import truck1 from "../assets/trucks2.jpg";

function Shipment() {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex">
        <div>
          <h2 className="text-xl mb-4 font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quod
            repellat ipsa voluptatum, aut vel repellendus rerum, tenetur cum
            odit tempore hic tempora ex soluta natus voluptates eius nihil
            distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit perferendis consequatur optio voluptates provident soluta
            dolore modi quisquam non deleniti porro cumque sint sequi similique,
            voluptatibus debitis culpa maiores rerum? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
        </div>
        <div className="w-[200%] ml-8">
          <img src={truck1} alt="section pic" />
        </div>
      </div>
    </div>
  );
}

export default Shipment;
