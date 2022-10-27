import React from "react";
import { Link } from "react-router-dom";
import BlogApi from "../assets/data/BlogApi";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h1>Other Posts you like</h1>

        {BlogApi.map((value, index) => {
          return (
            <div className="post" key={index}>
              <img src={value.img} alt="post-img" />
              <Link className="linkUrl" to={`/post/${index}`}>
                <h2>{value.title}</h2>
              </Link>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
