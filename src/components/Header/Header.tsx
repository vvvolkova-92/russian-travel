import * as React from "react";
import "./Header.scss";
import {Link} from "../../ui/Link/Link";
export const Header: React.FC = () => {
  let theme = 'black';
  return (
    <header className="header page__block page__block_size_max">
      <div className="header__logo"></div>
      <ul className="header__buttons">
        <li className={`header__link ${theme === 'black' && 'header__link_active'}`}>
          <Link type={"button"} text={"Темная"} />
        </li>
        <li className={`header__link ${theme === 'white' && 'header__link_active'}`}>
          <Link type={"button"} text={"Светлая"} />
        </li>
      </ul>
    </header>
  );
};