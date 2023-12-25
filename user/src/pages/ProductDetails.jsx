import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppURL from "../api/AppURL";
import axios from "axios";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Navigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthUser from "../components/AuthUser";

function ProductDetails() {
  const { getToken } = AuthUser();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [PageRef, setPageRef] = useState(false);

  useEffect(() => {
    axios
      .get(AppURL.ProductDetails(id))
      .then((response) => {
        const { productDetails, productList } = response.data;
        setProductDetails(productDetails[0]);
        setProductList(productList[0]);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = () => {
    // Check if the user is authenticated
    if (!getToken()) {
      // If not authenticated, navigate to the login page
      toast.error("login to add Product");
    } else {
      // If authenticated, proceed with adding to cart
      const data = {
        email: productList.added_by.email,
        image: productList.image,
        product_code: productList.product_code,
        quantity: quantity,
        product_name: productList.title,
      };

      axios
        .post(AppURL.AddToCart, data)
        .then((response) => {
          setPageRef(true);
          toast.success("Product added to cart successfully");
          window.location.reload();
          // You can show a success message or redirect the user to the cart page
        })
        .catch((error) => {
          console.error("Error adding product to cart:", error);
          // Handle error, show an error message to the user
        });
    }
  };
  const pageRef = () => {
    if (PageRef) {
      let URL = window.location;
      return <Navigate to={URL} />;
    }
    return null; // Make sure to handle the case when PageRef is false
  };

  return (
    <>
      <Nav />
      <div>
        <hr />
        <h1 style={{ textAlign: "center" }}>Product Details</h1>
        <hr />
        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <InnerImageZoom
                zoomScale={1.0}
                zoomType={"hover"}
                src={productList.image}
                className="img-fluid"
                alt="Product Image"
              />
            </div>

            <div className="col-md-6">
              <h2>{productList.title}</h2>
              <p className="text-muted">Category: {productList.category}</p>
              <p>{productDetails.long_description}</p>
              <h3>Price: ${productList.price}</h3>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="btn btn-primary" onClick={addToCart}>
                Add to Cart
              </button>

              {/* Display added_by information */}
              {productList.added_by && (
                <div className="mt-3">
                  <h4>Added By:</h4>
                  <p>Vendor Name: {productList.added_by.username}</p>
                  <p>Vendor email: {productList.added_by.email}</p>

                  <p>Phone: {productList.added_by.phone}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {pageRef()}
      <br />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;
