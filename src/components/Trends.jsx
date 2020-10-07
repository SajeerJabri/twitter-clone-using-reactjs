import React from "react";
import { FaSearch } from "react-icons/fa";
import TrendsKeyword from "./TrendsKeyword";

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__input">
        <FaSearch className="trends__input_icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <TrendsKeyword />
    </div>
  );
};

export default Trends;
