import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="text-2xl text-red-700 text-center border-2 border-solid w-[80%]">
        No products found.
      </p>
    );
  }
  console.log("data form the ProductList", products);
  return (
    <div className="flex flex-wrap gap-5">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
