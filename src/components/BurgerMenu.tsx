import React from "react";

export default function BurgerMenu() {
  return (
    <div className="menu-burger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="burger"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}
