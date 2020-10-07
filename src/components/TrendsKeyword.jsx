import React from "react";
import { FaRegSun } from "react-icons/fa";

const TrendsKeyword = () => {
  return (
    <div className="trends__keyword">
      <div className="trends__for_you">
        <span>Trends for you</span>
        <FaRegSun className="trends__for_you_icon" />
      </div>

      <div className="trending__keyword_list">
        <div className="trending__keyword">
          <div className="trending__country">Trending in Pakistan</div>
          <div className="trending__country_keyword">Islam</div>
          <div className="trending__tweets">2M Tweets</div>
        </div>
        <div className="trending__keyword">
          <div className="trending__country">Trending in Pakistan</div>
          <div className="trending__country_keyword">Karachi</div>
          <div className="trending__tweets">97.2K Tweets</div>
        </div>
        <div className="trending__keyword">
          <div className="trending__country">Trending in Pakistan</div>
          <div className="trending__country_keyword">Cricket</div>
          <div className="trending__tweets">134K Tweets</div>
        </div>
        <div className="trending__keyword">
          <div className="trending__country">Trending in Pakistan</div>
          <div className="trending__country_keyword">ISPR</div>
          <div className="trending__tweets">275K Tweets</div>
        </div>
      </div>
      <div className="showmore__link">
        <a href="/">Show More</a>
      </div>
    </div>
  );
};

export default TrendsKeyword;
