import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
const VendorAll = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/allProduct")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (productId) => {
    fetch(`http://127.0.0.1:8000/api/deleteProduct/${productId}`)
      .then((response) => {
        toast.success("This Ad is Now Live!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        // Handle error and show a notification or feedback to the user
      });
  };

  const handlePublish = (productId) => {
    fetch(`http://127.0.0.1:8000/api/activeStatus/${productId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("This Add is Now Live!");
        window.location.reload();
        console.log(data.message);
        // You can update the status in the React state or re-fetch the data
        // For simplicity, let's assume the API returns the updated product
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId ? { ...product, status: 1 } : product
          )
        );
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  return (
    <div className="container">
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Special Price</th>
            <th>Image</th>
            <th>Added By</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.special_price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxWidth: "50px", maxHeight: "50px" }}
                />
              </td>
              <td>{product.added_by && <p>{product.added_by.username}</p>}</td>
              <td>
                {product.status === "1" ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-info px-5"
                      disabled
                    >
                      pusblished
                    </button>
                    <Link
                      to={`http://127.0.0.1:8000/api/deleteProduct/${product.id}`}
                      onClick={handleDelete}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <i className="bi-info-circle-fill"></i> delete
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-dark px-5"
                      onClick={() => handlePublish(product.id)}
                    >
                      <i className="bi bi-upload"></i>Publish
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorAll;
