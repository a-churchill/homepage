import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "react-jss";
import { AppTheme } from "./types/styles";

const appTheme: AppTheme = {
  colorPrimary: "#4395ff",
  colorSecondary: "#3a414b",
  colorBackground: "rgb(230, 230, 230)",
  colorText: "rgb(0, 0, 0)",
  animation: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s"
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
