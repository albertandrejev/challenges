import MuiSnackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

interface Props {
  readonly children: string;
  readonly open: boolean;
  readonly close: () => void;
}

const position: SnackbarOrigin = { vertical: "bottom", horizontal: "right" };

const Snackbar: React.FunctionComponent<Props> = ({ open, close, children }): JSX.Element => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }

    close();
  };

  return (
    <div>
      <MuiSnackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={position}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
          {children}
        </MuiAlert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
