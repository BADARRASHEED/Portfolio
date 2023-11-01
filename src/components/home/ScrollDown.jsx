import React from "react";

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll_button button--flex">
        <svg
          width={32}
          height={32}
          className="home_scroll_mouse"
          viewBox="0 0 247 390"
        >
          <path
            className="wheel"
            d="M123.359,79.775 123.359,152.618"
            fill="none"
            stroke="var(--title-color)" // Set the stroke attribute to the variable
            strokeWidth={20}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359 C236.717,60.794 185.923,10 123.359,10 C60.794,10 10,60.794 10,123.359 L10,266.596 C10,329.161 60.794,379.955 123.359,379.955 C185.923,379.955 236.717,329.161 236.717,266.596 L236.717,123.359 Z"
            fill="none"
            stroke="var(--title-color)" // Set the stroke attribute to the variable
            strokeWidth={20}
          ></path>
        </svg>
        <span className="home_scroll_name">Scroll Down</span>
        <i className="uil uil-arrow-down home_scroll_arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
