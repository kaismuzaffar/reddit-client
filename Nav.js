import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiReddit } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import "../Nav/Nav.css";

const Nav = () => {
  const [search, setSearch] = useState("");

  const handleChange = (search) => {
    setSearch(search.target.value);
  };

  return (
    <div className="Nav">
      <div className="logo">
        <SiReddit className="logo-icon" />
        <h1>
          Sni<span>pp</span>et
        </h1>
      </div>
      <p>Reddit, minimised</p>
      <div className="searchbar">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={handleChange}
        />
        <Link to={`/${search}`}>
          <FiSearch className="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
