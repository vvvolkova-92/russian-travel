// import * as React from "react";
// import {FC} from "react";
// import {ThemeContext, themes} from "./ThemeContext";
//
// const ThemeProvider:FC<{children: React.ReactNode}> = ({children}) => {
//   const [ theme, setTheme ] = React.useState(themes.dark)
//
//   React.useEffect(() => {
//     document.documentElement.dataset.theme = theme;
//     localStorage.setItem('theme', theme);
//   }, [ theme ])
//
//   return (
//     <ThemeContext.Provider value={[ theme, setTheme ]}>
//       {children}
//     </ThemeContext.Provider>)
// }
// export default ThemeProvider