import { Link } from "react-router-dom";

import { useState } from "react";

import Burger from "../Components/Burger";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header onClick={handleClick} className={isVisible ? "visible" : ""}>
      <Burger />

      {isVisible && (
        <div className="nav-wrapper">
          <Link to="/upload">Upload a piece</Link>
          <Link to="/your-pieces">
            Your
            <br />
            pieces
          </Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
