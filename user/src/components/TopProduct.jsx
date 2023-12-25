import React, { useState, useEffect } from "react";
import AppURL from "../api/AppURL";
import axios from "axios";
import { Link } from "react-router-dom";

const TopProduct = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.ProductListByRemark("top"))
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching product list:", error);
      });
  }, []);

  // const submitAddToCart = (e) => {
  //   e.preventDefault();
  //   product_;
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3"
    >
      {productData.map((product, i) => (
        <div key={i} className="col">
          <div className="card border shadow-none mb-0">
            <div className="card-body text-center">
              <img src={product.image} className="img-fluid mb-3" alt="" />

              <h6 className="product-title">{product.title}</h6>
              <p className="product-price fs-5 mb-1">
                <span>{product.price}</span>
              </p>
              <div className="rating mb-0">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
              </div>
              <small></small>
              <div className="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                <a
                  href="javascript:;"
                  className="btn btn-sm btn-outline-primary"
                  // onClick={submitAddToCart}
                >
                  <i className="bi bi-pencil-fill"></i> Buy
                </a>
                <Link
                  to={`/productDetails/${product.id}`}
                  className="btn btn-sm btn-outline-success"
                >
                  <i className="bi-info-circle-fill"></i> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopProduct;
