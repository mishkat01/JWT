import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
const UserOrder = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/CartDetails")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2>My Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Imagey</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.quantity}</td>
              <td>{product.unit_price}</td>
              <td>{product.total_price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxWidth: "50px", maxHeight: "50px" }}
                />
              </td>
              <td>{product.added_by && <p>{product.added_by.username}</p>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrder;
