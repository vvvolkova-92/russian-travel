import * as React from "react";
import "./Header.scss";
export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="headerLogo"></div>
      <ul className="header__lang">
        <li className="header__links"><a href="#" className="header__link header__link_active">Темная</a></li>
        <li className="header__links"><a href="#" className="header__link ">Светлая</a></li>
      </ul>
    </header>
  );
};