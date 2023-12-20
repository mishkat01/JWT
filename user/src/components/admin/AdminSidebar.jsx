import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px", height: "1000px", display: "block" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <Link to="/productAdd" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              Product Add
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              Product's
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Vendor's
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg>
              Review add's
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default AdminSidebar;
