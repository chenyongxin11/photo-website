import React from "react";

function Picture({ data }) {
  return (
    <div className="picture">
      <p>Author: data.photographer</p>
      <div className="pictureContainer">
        <img src={data.src.large} alt="img loading" />
      </div>
      <p>
        Down load:{" "}
        <a href={data.src.large} target="_blank">
          Click here
        </a>
      </p>
    </div>
  );
}

export default Picture;
