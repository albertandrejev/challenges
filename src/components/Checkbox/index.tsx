import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from "@material-ui/core/Checkbox";
import { FormApi } from "final-form";
import React from "react";
import { useField } from "react-final-form-hooks";

import { FormValues } from "../Form";
import FormControlLabel from "../FormControlLabel";

interface Props extends Omit<MuiCheckboxProps, "form"> {
  readonly name: string;
  readonly label: string;
  readonly form: FormApi<FormValues>;
  readonly onChangeCallback?: (checked: boolean) => void;
}

const Checkbox: React.FunctionComponent<Props> = ({ label, name, form, onChangeCallback }): JSX.Element => {
  const { input } = useField(name, form);

  const { onChange, value, ...restInput } = input;
  const inputProps = { name, ...restInput };

  const onCheckBoxChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    onChange(checked);
    if (onChangeCallback) {
      onChangeCallback(checked);
    }
  };

  const checkbox = (
    <MuiCheckbox checked={!!value} color="primary" onChange={onCheckBoxChange} inputProps={inputProps} />
  );

  return <FormControlLabel control={checkbox} label={label} />;
};

export default Checkbox;
