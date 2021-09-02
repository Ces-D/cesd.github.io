import React from "react";

export default function SearchBar() {

  return (
    <div className="w-full sm:w-3/12 h-8 sm:h-6 mt-2 sm:mt-0">
      <input
        className="border-box w-11/12 sm:w-10/12 md:w-11/12 p-1 bg-gray h-full align-middle"
        type="text"
        placeholder="Search"
      />
      <button className="border-box bg-teal rounded-sm align-middle w-1/12 sm:w-2/12 md:w-1/12 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 sm:h-5 sm:w-5 mx-auto"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
