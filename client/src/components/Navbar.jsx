import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/blog-logo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="logo-img" />
          </div>
          <div className="links">
            <Link className="linkUrl" to="/?cat=art">
              <h6>Art</h6>
            </Link>
            <Link className="linkUrl" to="/?cat=craft">
              <h6>Craft</h6>
            </Link>
            <Link className="linkUrl" to="/?cat=technology">
              <h6>Technology</h6>
            </Link>
            <Link className="linkUrl" to="/login">
              <h6>LogIn</h6>
            </Link>
            <Link className="linkUrl" to="/register">
              <h6>Register</h6>
            </Link>
            <span>Mohit</span>
            <span>LogOut</span>
            <div className="write">
              <Link className="linkUrl" to="/write">
                Write
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
