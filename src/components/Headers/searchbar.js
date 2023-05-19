import React from "react";
import "./searchbar.css";

const Searchbar = () => {
  return (
    <div>
      <div>
        <div className="searchbar d-flex">
          <input type="text" placeholder="search here" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
