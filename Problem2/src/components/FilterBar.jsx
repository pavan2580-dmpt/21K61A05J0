import React from "react";
import { category, companiesList } from "../constants/Data";

function FilterBar({ filters, setFilters }) {
  const categories = category;
  const companies = companiesList;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h4 className="text-2xl">Filter By</h4>
      <div>
        <label className="mr-4">Category:</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="border-2 border-solid w-[250px]"
        >
          <option value="">--------Select--------</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Company Dropdown */}
      <div>
        <label className="mr-4">Company:</label>
        <select
          name="company"
          value={filters.company}
          onChange={handleInputChange}
          className="border-2 border-solid w-[250px] mt-4"
        >
          <option value="">--------Select--------</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      <div className="rating_div mt-4">
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          className="border-2 border-solid ml-10"
          value={filters.rating}
          onChange={handleInputChange}
        />
      </div>

      <div className="price_segment mt-4">
        <label>Price Range:</label>
        <input
          type="number"
          name="priceRangeMin"
          placeholder="Min"
          className="border-2 border-solid ml-1"
          value={filters.priceRange[0]}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: [e.target.value, prev.priceRange[1]],
            }))
          }
        />
        <input
          type="number"
          name="priceRangeMax"
          placeholder="Max"
          className="border-2 border-solid ml-2"
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceRange: [prev.priceRange[0], e.target.value],
            }))
          }
        />
      </div>

      <div className="mt-4">
        <label>Availability:</label>
        <input
          type="checkbox"
          name="availability"
          checked={filters.availability}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}

export default FilterBar;
