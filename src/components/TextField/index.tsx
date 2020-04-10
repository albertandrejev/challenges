import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FieldValidator, FormApi } from "final-form";
import React from "react";
import { useField } from "react-final-form-hooks";

import { FormValues } from "../Form";

interface InnerProps {
  readonly name: string;
  readonly form: FormApi<FormValues>;
  readonly validate?: FieldValidator<string | undefined>;
  readonly onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type Props = InnerProps & TextFieldProps;

const TextField: React.FunctionComponent<Props> = ({
  name,
  form,
  validate,
  onChanged,
  ...restProps
}): JSX.Element => {
  const { input, meta } = useField(name, form, validate);

  const error = meta.error && (meta.touched || !meta.pristine);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    input.onChange(event);
    if (onChanged) {
      onChanged(event);
    }
  };

  return (
    <MuiTextField
      error={error}
      name={input.name}
      value={input.value}
      helperText={error ? meta.error : undefined}
      onChange={handleChange}
      margin="normal"
      {...restProps}
    />
  );
};

export default TextField;
