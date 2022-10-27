import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/blog-logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={Logo} alt="footer-logo-img" />
        <p>
          Made with ❤ by{" "}
          <b>
            <i>Mohitul Islam.</i>
          </b>{" "}
          &nbsp;
          <Link
            className="linkUrl"
            to="https://github.com/mohit838/Dyanmic-Blog"
          >
            | GitHub &nbsp;
          </Link>
          <Link className="linkUrl" to="https://facebook.com/mohit838">
            | Fabcebook |
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
