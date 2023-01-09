import React, { useState } from "react";

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [breakWord, setBreakWord] = useState(true);
  return (
    <article className="tour" key={id}>
      <figure className="tour-img-container">
        <img src={image} alt={name} />
      </figure>
      <div className="tour-text">
        <div className="tour-info">
          <h3 className="tour-info-name">{name}</h3>
          <p className="tour-info-price">${price}</p>
        </div>
        <p className="tour-text-details">
          {breakWord ? info : `${info.substring(0, 150)}`}
          <button
            className="breakword"
            onClick={() => setBreakWord(!breakWord)}
          >
            {breakWord ? "less" : "more"}
          </button>
        </p>
      </div>
      <button className="btn-interest" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
