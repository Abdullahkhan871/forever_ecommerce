import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  return (
    <Link to={`/collection/product/${id}`} className="flex flex-col  gap-2" >
      <div className="h-80 overflow-hidden">
        <img
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-150"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
