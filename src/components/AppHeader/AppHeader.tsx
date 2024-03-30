import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppHeader.scss"

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick: React.MouseEventHandler<HTMLDivElement> = () => {
    navigate("/main");
  };

  return (
    <header>
      <nav>
        <div className="logo" onClick={handleLogoClick}>
          <img src="logo.svg" className="logoImg" alt="Logo" />
          <span className="logo-title">EstateExplorer</span>
        </div>
        <ul>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
