import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "react-jss";
import { appTheme } from "./common/theming";


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
