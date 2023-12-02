import axios from "axios";
import React, { useState, useEffect } from "react";
import AppURL from "../api/AppURL";

function HomePage() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#">
              Features
            </a>
            <a class="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomePage;
