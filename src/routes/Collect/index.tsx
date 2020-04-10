import React from "react";

import { FormValues } from "../../components/Form";
import Layout, { ConsentValue } from "./components/Layout";

const consents: ConsentValue[] = [
  { name: "news", label: "Receive newsletter" },
  { name: "ads", label: "Be shown targeted ads" },
  { name: "stats", label: "Contribute to anonymous usage statistics" },
];

const Collect: React.FunctionComponent = (): JSX.Element => {
  const onSubmit = (values: FormValues): void => {
    console.log("Submitted values", values);
  };

  return <Layout onSubmit={onSubmit} consents={consents} />;
};

export default Collect;
