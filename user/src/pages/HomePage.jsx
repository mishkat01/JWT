import axios from "axios";
import React, { useState, useEffect } from "react";
import AppURL from "../api/AppURL";
import Nav from "../components/Nav";
import Carousal from "../components/carousel";
import ProductGrid from "../components/ProductGrid";

function HomePage() {
  return (
    <>
      <Nav />
      <div className="card pt-3 pb-5 ps-5 pe-5 mb-5">
        <div className="card-body  ">
          <Carousal />
        </div>
      </div>

      <ProductGrid />
    </>
  );
}

export default HomePage;
