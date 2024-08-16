import React from "react";

function SortBar({ sort, setSort }) {
  return (
    <div className="mb-8 ml-4">
      <h4>Sort By :</h4>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="ml-4 border-2 border-solid rounded-md"
      >
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
    </div>
  );
}

export default SortBar;
