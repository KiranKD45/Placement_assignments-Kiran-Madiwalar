import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <div>
      <div className="border border-danger text-center">
         <p>Graphs average</p>
         <h2>4500</h2>
         <p>This is the average in a day</p>
      </div>
      </div>
      <h4>Dashboard with {theme} theme</h4>
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Posts;
