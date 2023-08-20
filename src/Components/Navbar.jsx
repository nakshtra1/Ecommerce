import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import { useNavigate } from "react-router-dom";

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    onLogout(); // Call the onLogout prop to update the user's authentication state
    navigate("/login");
  };

  const state = useSelector((state) => state.handleCart);
  console.log(state);
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            Tanish Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                className="btn btn-outline-dark ms-2"
                onClick={handleLogout}
              >
                <i className="fa fa-user-plus me-1"></i> Logout
              </NavLink>
              <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
