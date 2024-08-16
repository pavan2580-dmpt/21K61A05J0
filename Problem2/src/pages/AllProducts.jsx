import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";
import Pagination from "../components/Pagination";
import { mockProducts } from "../constants/Data";
import { BearerToken } from "../constants/Data";

function AllProductsPage() {
  const [products, setProducts] = useState(mockProducts);
  const [filters, setFilters] = useState({
    category: "",
    company: "",
    rating: "",
    priceRange: [100, 10000],
    availability: true,
  });
  const [sort, setSort] = useState("price");
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (filters.company && filters.category) {
      fetchProducts();
    }
  }, [filters]);

  useEffect(() => {
    console.log("data console from the useEffect", products);
  }, [products]);

  const fetchProducts = async () => {
    const { company, category, priceRange } = filters;
    const token = BearerToken;

    try {
      const response = await axios.get(
        `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
        {
          params: {
            top: 10,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts(response.data);

      console.log("response data from api = ", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const applyFiltersAndSort = () => {
    let filteredProducts = products.filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) &&
        (filters.company ? product.company === filters.company : true) &&
        (filters.availability ? product.availability === "yes" : true) &&
        (filters.rating ? product.rating >= filters.rating : true) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      );
    });

    switch (sort) {
      case "price":
        filteredProducts.sort((item1, item2) => item1.price - item2.price);
        break;
      case "rating":
        filteredProducts.sort((item1, item2) => item2.rating - item1.rating);
        break;
      case "discount":
        filteredProducts.sort(
          (item1, item2) => item2.discount - item1.discount
        );
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const paginatedProducts = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return applyFiltersAndSort().slice(startIndex, endIndex);
  };

  return (
    <div className="ml-4">
      <FilterBar filters={filters} setFilters={setFilters} />
      <SortBar sort={sort} setSort={setSort} />
      <ProductList products={paginatedProducts()} />
      <Pagination currentPage={page} setPage={setPage} />
    </div>
  );
}

export default AllProductsPage;
