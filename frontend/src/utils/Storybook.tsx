import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { MemoryRouter as Router } from "react-router-dom";

import theme from "./theme";

interface Props {
  readonly children: React.ReactNode;
}

/**
 * Storybook wrapper used to wrap storybook stories.
 *
 * See .storybook/preview.js
 */
const Storybook: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {children}
      </Router>
    </ThemeProvider>
  );
};

export default Storybook;
