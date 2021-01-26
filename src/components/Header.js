import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30,
  };
  return (
    <div>
      <div>
        <h2 style={style}>
          <Link to="/">Home</Link>
        </h2>
        <h2 style={style}>
          <Link to="/jokes">Jokes</Link>
        </h2>
        <h2 style={style}>
          <Link to="/cocktails">Cocktails</Link>
        </h2>
      </div>
      {children}
    </div>
  );
};

export default Header;
