import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="page-title">Crypto Dashboard</h1>
      <nav>
        <ul className="nav-links">
            <a href="/">Home</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
