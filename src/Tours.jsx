import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <div className="layout tours">
      {tours.map((tour, index) => {
        return <Tour key={index} removeTour={removeTour} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
