import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <>
      <div className="write">
        <div className="content">
          <input type="text" placeholder="Title" />

          <div className="editorContainer">
            <ReactQuill
              className="editorBlog"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input style={{ display: "none" }} type="file" name="" id="file" />
            <label htmlFor="file">Upload</label>
            <div className="buttons">
              <button>Save as draft</button>
              <button>Udpate</button>
            </div>
          </div>
          <div className="item">
            <div className="categories">
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">ART</label>
              <input
                type="radio"
                name="cat"
                value="technology"
                id="technology"
              />
              <label htmlFor="technology">TECHNOLOGY</label>
              <input type="radio" name="cat" value="craft" id="craft" />
              <label htmlFor="craft">CRAFT</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
