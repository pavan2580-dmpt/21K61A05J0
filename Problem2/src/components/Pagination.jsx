import React from "react";

function Pagination({ currentPage, setPage }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setPage(currentPage + 1);
  };

  return (
    <div className="mt-[40px] ">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className=" bg-blue-600 text-white p-2 rounded-md px-3 cursor-pointer ml-3"
      >
        Previous
      </button>
      <span className=" p-2">
        Current Page <span className=" text-green-600">{currentPage}</span>
      </span>
      <button
        onClick={handleNext}
        className=" bg-blue-600 text-white p-2 rounded-md px-5 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
