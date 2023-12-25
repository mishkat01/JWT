import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px", height: "1000px", display: "block" }}
      >
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/vendor" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/vendor/productAdd" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Product Add
            </Link>
          </li>
          <li>
            <Link to="/vendor/productAll" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Product's
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default AdminSidebar;
