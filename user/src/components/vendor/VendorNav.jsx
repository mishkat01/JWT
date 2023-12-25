import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import Logout from "../Logout";
import React, { useState } from "react";

function Nav() {
  const { user } = AuthUser();
  return (
    <>
      <header class="top-header">
        <nav class="navbar navbar-expand">
          <div class="mobile-toggle-icon d-xl-none">
            <i class="bi bi-list"></i>
          </div>
          <div>
            {" "}
            <h3>Welcome, {user.username}!</h3>
          </div>
          <div class="search-toggle-icon d-xl-none ms-auto">
            <i class="bi bi-search"></i>
          </div>
          <form class="searchbar d-none d-xl-flex ms-auto">
            <div class="position-absolute top-50 translate-middle-y search-icon ms-3">
              <i class="bi bi-search"></i>
            </div>
            <input
              class="form-control"
              type="text"
              placeholder="Type here to search"
            />
            <div class="position-absolute top-50 translate-middle-y d-block d-xl-none search-close-icon">
              <i class="bi bi-x-lg"></i>
            </div>
          </form>
          <div class="top-navbar-right ms-3">
            <ul class="navbar-nav align-items-center">
              <li class="nav-item dropdown dropdown-large d-none d-sm-block">
                <a
                  class="nav-link  dropdown-toggle-nocaret"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <div class="notifications">
                    <span class="notify-badge">8</span>
                    <i class="bi bi-bell-fill"></i>
                  </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end p-0">
                  <div class="p-2 border-bottom m-2">
                    <h5 class="h5 mb-0">Notifications</h5>
                  </div>
                  <div class="header-notifications-list p-2">
                    <div class="dropdown-item bg-light radius-10 mb-1">
                      <form class="dropdown-searchbar position-relative">
                        <div class="position-absolute top-50 start-0 translate-middle-y px-3 search-icon">
                          <i class="bi bi-search"></i>
                        </div>
                        <input
                          class="form-control"
                          type="search"
                          placeholder="Search Messages"
                        />
                      </form>
                    </div>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-items-center">
                        <div class="notification-box">
                          <i class="bi bi-basket2-fill"></i>
                        </div>
                        <div class="ms-3 flex-grow-1">
                          <h6 class="mb-0 dropdown-msg-user">
                            New Orders{" "}
                            <span class="msg-time float-end text-secondary">
                              1 m
                            </span>
                          </h6>
                          <small class="mb-0 dropdown-msg-text text-secondary d-flex align-items-center">
                            You have recived new orders
                          </small>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <div>
                      <hr class="dropdown-divider" />
                    </div>
                    <a class="dropdown-item" href="#">
                      <div class="text-center">View All Notifications</div>
                    </a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown dropdown-large d-none d-sm-block">
                <Logout />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
