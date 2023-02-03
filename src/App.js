import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Freight from "./pages/Freight";
import Shipper from "./pages/Shipper";
import Carrier from "./pages/Carrier";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="h-screen ">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freight" element={<Freight />} />
          <Route path="/shipper" element={<Shipper />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
//  className="min-h-screen min-w-screen"
