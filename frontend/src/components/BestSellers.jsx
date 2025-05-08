import React from "react";
import { products } from "../assets/assets";
import ProductItem from "../components/ProductItem";

const BestSellers = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 mt-5">
      {products.slice(6, 11).map((list) => (
        <ProductItem
          key={list._id}
          id={list._id}
          image={list.image[0]}
          name={list.name}
          price={list.price}
        />
      ))}
    </div>
  );
};

export default BestSellers;
