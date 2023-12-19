import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h4 className="text-uppercase">About Us</h4>
            <p>
              We are a passionate team of stylists dedicated to helping you look
              your best.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="text-uppercase">Customer Service</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="text-uppercase">Stay Connected</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="text-uppercase">Subscribe to our Newsletter</h4>
            <p>Get the latest trends and deals delivered to your inbox.</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
