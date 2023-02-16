import * as React from "react";
import {Header} from "../Header/Header";
import {Intro} from "../Intro/Intro";
import {Lead} from "../Lead/Lead";
import {Gallery} from "../Gallery/Gallery";
import {Places} from "../Places/Places";
import {Cover} from "../Cover/Cover";
import {useEffect} from "react";
import {Random} from "../Random/Random";
import {themes} from "../../contexts/ThemeContext";

// @ts-ignore
export const ThemeContext = React.createContext();
export const App = () => {
  const [ theme, setTheme ] = React.useState(themes.dark);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [ theme ]);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className="App">
        <Header />
        <main>
          <Lead />
          <Random />
          <Intro />
          <Gallery />
          <Places />
          <Cover />
        </main>
      </div>
    </ThemeContext.Provider >
  );
}