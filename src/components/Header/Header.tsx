import * as React from "react";
import "./Header.scss";
import {Link} from "../../ui/Link/Link";
import {useContext} from "react";
import {themes} from "../../contexts/ThemeContext";
import {ThemeContext} from "../App/App";

export const Header: React.FC = () => {
  // @ts-ignore
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <header className="header page__block page__block_size_max">
      <div className="header__logo"></div>
      <ul className="header__buttons">
        <li className={`header__link ${theme === themes.dark && 'header__link_active'}`}>
          <Link type={"button"} text={"Темная"} onClickButton={() => setTheme(themes.dark)}/>
        </li>
        <li className={`header__link ${theme === themes.light && 'header__link_active'}`}>
          <Link type={"button"} text={"Светлая"} onClickButton={() => setTheme(themes.light)}/>
        </li>
      </ul>
    </header>
  );
};