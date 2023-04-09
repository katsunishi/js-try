import React from "react";
import "./ImageGarally.css";

const ImageGarally = ({ fetchDate }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchDate.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGarally;
