import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";
const VendorAll = () => {
  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/allvendor")
      .then((response) => response.json())
      .then((data) => setVendor(data));
  }, []);

  const handleDelete = (VendorId) => {
    fetch(`http://127.0.0.1:8000/api/deleteVendor/${VendorId}`)
      .then((response) => {
        toast.success("Vendor Deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting Vendor:", error);
        // Handle error and show a notification or feedback to the user
      });
  };

  // const handlePublish = (productId) => {
  //   fetch(`http://127.0.0.1:8000/api/activeStatus/${productId}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: productId }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       toast.success("This Add is Now Live!");
  //       window.location.reload();
  //       console.log(data.message);
  //       // You can update the status in the React state or re-fetch the data
  //       // For simplicity, let's assume the API returns the updated product
  //       setProducts((prevProducts) =>
  //         prevProducts.map((product) =>
  //           product.id === productId ? { ...product, status: 1 } : product
  //         )
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error updating status:", error);
  //     });
  // };

  return (
    <div className="container">
      <h2>Vendor List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>

            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vendor.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.username}</td>
              <td>{vendor.email}</td>
              <td>{vendor.phone}</td>

              <td>
                <Link
                  to={`http://127.0.0.1:8000/api/deleteVendor/${vendor.id}`}
                  onClick={handleDelete}
                  className="btn btn-sm btn-outline-danger"
                >
                  <i className="bi-info-circle-fill"></i> Remove
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorAll;
