import React from "react";

const Brand = () => {
  return (
    <div className="brand-wrapper">
      <svg className="brand-logo" height="60" width="60">
        <circle
          cx="30"
          cy="30"
          r="20"
          stroke="black"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>
      <h1 className="brand-title">Flex Timer</h1>
    </div>
  );
};

export default Brand;
