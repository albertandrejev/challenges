import { action } from "@storybook/addon-actions";
import React from "react";
import { useForm } from "react-final-form-hooks";

import Box from "../Box";
import Button from "../Button";
import Checkbox from "../Checkbox";
import TextField from "../TextField";
import Form, { FormValues, ValidationError } from "./index";

export default { title: "Components/Form" };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); // eslint-disable-line

const onSubmit = async (values: FormValues): Promise<void> => {
  action("onSubmit. Before delay")();
  await sleep(2000);
  action("onSubmit. After delay")(values);
};

const TEXT_FIELD = "textFieldUniqueName";
const CHECKBOX_FIELD = "checkboxFieldUniqueName";

const validate = (values: FormValues): object => {
  const errors: ValidationError = {};
  if (!values[TEXT_FIELD]) {
    errors[TEXT_FIELD] = "Required";
  }
  if (values[TEXT_FIELD] && values[TEXT_FIELD].length <= 4) {
    errors[TEXT_FIELD] = "Must be at least 4 chars";
  }

  return errors;
};

const FormStory = (): JSX.Element => {
  const { form, handleSubmit, values, pristine, submitting } = useForm({
    onSubmit,
    validate,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <TextField label="Unique Identifier" placeholder="Unique Identifier" form={form} name={TEXT_FIELD} />
      <Box display="block" marginBottom={2}>
        <Checkbox
          form={form}
          name={CHECKBOX_FIELD}
          onChangeCallback={action("Checkbox:onChangeCallback")}
          label="Checkbox selector"
        />
      </Box>

      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
      <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </Form>
  );
};

export const form = (): JSX.Element => <FormStory />;
