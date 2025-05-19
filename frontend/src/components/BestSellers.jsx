import React from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const BestSellers = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 mt-5">
      {products && products.length > 0 && products.slice(6, 11).map((list) => (
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
