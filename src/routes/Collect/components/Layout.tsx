import { makeStyles, Theme } from "@material-ui/core";
import React from "react";

import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import FormControl from "../../../components/FormControl";
import FormControlLabel from "../../../components/FormControlLabel";
import FormGroup from "../../../components/FormGroup";
import FormLabel from "../../../components/FormLabel";
import TextField from "../../../components/TextField";

const useStyles = makeStyles((theme: Theme) => ({
  fieldMargin: {
    margin: `0 ${theme.spacing(2)}px`,
  },
}));

const Collect: React.FunctionComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <form>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box marginBottom={4}>
          <TextField id="name" label="Name" className={classes.fieldMargin} />
          <TextField id="email" type="email" label="Email address" className={classes.fieldMargin} />
        </Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">I agree to:</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked={true} name="news" />} label="Receive newsletter" />
            <FormControlLabel
              control={<Checkbox checked={true} name="ads" />}
              label="Be shown targeted ads"
            />
            <FormControlLabel
              control={<Checkbox checked={true} name="stats" />}
              label="Contribute to anonymous usage statistics"
            />
          </FormGroup>
        </FormControl>
        <Box marginTop={4} />
        <Button type="submit" variant="contained" color="primary">
          Give consent
        </Button>
      </Box>
    </form>
  );
};

export default Collect;
