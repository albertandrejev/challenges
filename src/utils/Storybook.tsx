import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import * as React from "react";

import theme from "./theme";

interface Props {
  readonly children: React.ReactNode;
}

const Storybook: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
};

export default Storybook;
