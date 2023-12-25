import React, { useState, useEffect } from "react";
import AppURL from "../api/AppURL";
import axios from "axios";

function ProductGrid() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(AppURL.AllProduct)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  }, []);

  return (
    <>
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
                {product.added_by && (
                  <div className="mt-3">
                    <h4>Added By:</h4>
                    <p>Vendor Name: {product.added_by.username}</p>

                    <p>Phone: {product.added_by.phone}</p>
                  </div>
                )}
                <div className="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-outline-primary"
                  >
                    <i className="bi bi-pencil-fill"></i> Buy
                  </a>
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-outline-success"
                  >
                    <i className="bi bi-trash-fill"></i> Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductGrid;
