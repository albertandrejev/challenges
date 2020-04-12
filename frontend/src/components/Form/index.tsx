import React from "react";

export interface FormValues {
  [key: string]: string;
}

export interface ValidationError {
  [key: string]: string;
}

interface Props {
  readonly onSubmit: (
    event?: React.SyntheticEvent<HTMLFormElement>,
  ) => Promise<object | undefined> | undefined;
  readonly children: React.ReactNode;
  readonly className?: string;
}

const Form: React.FunctionComponent<Props> = ({ onSubmit, className, children }): JSX.Element => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;
