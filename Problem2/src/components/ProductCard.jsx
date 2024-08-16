import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // console.log("data from the productCards", product);
  return (
    <div className="border-solid border-black border-[1px] p-4 shadow-xl rounded-md text-xl">
      {/* Optional Link to Product Details Page */}
      {/* <Link to={`/products/${product.id}`}> */}
      <p>Product Name: {product.productName}</p>
      {/* </Link> */}
      <p>
        Price: <span className="text-red-600">${product.price}</span>
      </p>
      <p>
        Rating:{" "}
        {product.rating < 3 ? (
          <span className="text-red-700">{product.rating}</span>
        ) : (
          <span className="text-green-600">{product.rating}</span>
        )}
      </p>
      <p>Discount: {product.discount}%</p>
      <p>
        Availability:
        {product.availability === "yes" ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
