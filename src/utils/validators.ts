import { FieldValidator } from "final-form";

type ValidationError = string | undefined;

export function composeValidators<T>(...validators: readonly FieldValidator<T>[]): FieldValidator<T> {
  return (value, allValues, meta): ValidationError => {
    for (const validator of validators) {
      const validationError = validator(value, allValues, meta);

      if (validationError) {
        return validationError;
      }
    }

    return undefined;
  };
}

export const required: FieldValidator<string | undefined> = (value): ValidationError => {
  return value ? undefined : "Required";
};

export const validEmail: FieldValidator<string | undefined> = (email): ValidationError => {
  // obtained from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexp.test(String(email).toLowerCase()) ? undefined : "Please provide valid email";
};
