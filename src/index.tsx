import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
