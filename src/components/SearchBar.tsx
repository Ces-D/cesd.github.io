import React from "react";

export default function SearchBar() {
  return (
    <div className="w-11/12 mx-auto mt-2 sm:w-3/12 sm:mt-0">
      <input className="w-11/12 p-1" type="text" placeholder="Search" />
      <button className="bg-red-400 rounded-sm w-1/12 p-1 align-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
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
