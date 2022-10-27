import React from "react";
import { Link } from "react-router-dom";
import BlogApi from "../assets/data/BlogApi";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="posts">
          {BlogApi.map((value, index) => {
            return (
              <div className="post" key={index}>
                <div className="img">
                  <img src={value.img} alt="post-img" />
                </div>
                <div className="content">
                  <Link className="linkUrl" to={`/post/${index}`}>
                    <h1>{value.title}</h1>
                  </Link>
                  <p>{value.desc}</p>
                  <button>Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
