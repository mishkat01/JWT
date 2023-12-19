import axios from "axios";
import React, { useState, useEffect } from "react";
import AppURL from "../api/AppURL";
import Nav from "../components/Nav";
import Carousal from "../components/carousel";
import ProductGrid from "../components/ProductGrid";
import TopProduct from "../components/TopProduct";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Nav />

      <div className="card pt-3 pb-5 ps-5 pe-5 mb-5">
        <div className="card-body  ">
          <Carousal />
        </div>
      </div>

      <div>
        <hr />
        <h1 style={{ textAlign: "center" }}>Top Products</h1>
        <hr />
        <TopProduct />
      </div>
      <div>
        <hr />
        <h1 style={{ textAlign: "center" }}>Hot Deals </h1>
        <hr />
        <TopProduct />
      </div>
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
