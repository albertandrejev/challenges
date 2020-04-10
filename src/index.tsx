import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { configureStore } from "./store";
import theme from "./utils/theme";

const store = configureStore();

const render = (Component: React.ComponentType): void => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./routes", (): void => {
    const NextApp = require("./routes").default;
    render(NextApp);
  });
}
