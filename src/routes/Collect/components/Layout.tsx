import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useForm } from "react-final-form-hooks";

import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Form from "../../../components/Form";
import { FormValues } from "../../../components/Form";
import FormControl from "../../../components/FormControl";
import FormGroup from "../../../components/FormGroup";
import FormLabel from "../../../components/FormLabel";
import TextField from "../../../components/TextField";
import { composeValidators, required, validEmail } from "../../../utils/validators";

export interface ConsentValue {
  readonly name: string;
  readonly label: string;
}

const NAME_INPUT_FIELD = "nameField";
const EMAIL_INPUT_FIELD = "emailField";

const useStyles = makeStyles((theme: Theme) => ({
  fieldMargin: {
    margin: `0 ${theme.spacing(2)}px`,
  },
}));

export interface Props {
  readonly onSubmit: (values: FormValues) => void;
  readonly consents: ConsentValue[];
}

const emailValidator = composeValidators(required, validEmail);

const Collect: React.FunctionComponent<Props> = ({ onSubmit, consents }): JSX.Element => {
  const classes = useStyles();
  const { form, handleSubmit, submitting, invalid } = useForm({
    onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box marginBottom={4}>
          <TextField
            form={form}
            name={NAME_INPUT_FIELD}
            label="Name"
            required
            validate={required}
            className={classes.fieldMargin}
          />
          <TextField
            form={form}
            name={EMAIL_INPUT_FIELD}
            type="email"
            label="Email address"
            required
            validate={emailValidator}
            className={classes.fieldMargin}
          />
        </Box>
        <FormControl component="fieldset">
          <FormLabel component="legend">I agree to:</FormLabel>
          <FormGroup>
            {consents.map((consent) => (
              <Checkbox key={consent.name} form={form} name={consent.name} label={consent.label} />
            ))}
          </FormGroup>
        </FormControl>
        <Box marginTop={4} />
        <Button type="submit" variant="contained" color="primary" disabled={submitting || invalid}>
          Give consent
        </Button>
      </Box>
    </Form>
  );
};

export default Collect;
