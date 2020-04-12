import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./routes";
import { configureStore } from "./store";
import setFetchMocks from "./utils/fetchMock";
import theme from "./utils/theme";

// This call will set fetch mocks. Simply remove or comment it in order to disable mocking
setFetchMocks();

const store = configureStore();

const render = (Component: React.ComponentType): void => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <CssBaseline />
            <Component />
          </Router>
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
