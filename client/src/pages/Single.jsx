import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Single = () => {
  return (
    <>
      <div className="single">
        <div className="content">
          <img
            src="https://i.ibb.co/Rz5pMkG/image-webp-1.webp"
            alt="single-img"
          />
          <div className="user">
            <img src="https://i.ibb.co/Jxcc5Km/mohit2.jpg" alt="user-img" />

            <div className="info">
              <span>Mohit</span>
              <p>Posted 1 day ago</p>
            </div>

            <div className="edit">
              <Link to={`/write?edit=2`}>
                <FaRegEdit />
              </Link>
              <Link to={`/write?delete=2`}>
                <MdDelete />
              </Link>
            </div>
          </div>
        </div>
        <div className="menu">m</div>
      </div>
    </>
  );
};

export default Single;
