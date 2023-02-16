import React from "react";
import { App } from "./components/App/App";
import "./styles/styles.scss";

import { createRoot } from 'react-dom/client';
import ThemeProvider from "./contexts/ThemeProvider";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
);