import React from "react";

import { FormValues } from "../../components/Form";
import { Consent } from "../../store/consents";
import Layout, { ConsentValue, EMAIL_INPUT_FIELD, NAME_INPUT_FIELD } from "./components/Layout";

const consents: ConsentValue[] = [
  { name: "news", label: "Receive newsletter" },
  { name: "ads", label: "Be shown targeted ads" },
  { name: "stats", label: "Contribute to anonymous usage statistics" },
];

const Collect: React.FunctionComponent = (): JSX.Element => {
  const onSubmit = async (values: FormValues): Promise<void> => {
    // Assembling data object with user selected consents
    const data: Consent = {
      name: values[NAME_INPUT_FIELD],
      email: values[EMAIL_INPUT_FIELD],
      items: Object.entries(values)
        .filter(([key]) => consents.find((consent) => consent.name === key))
        .map(([key, value]) => ({
          title: consents.find((consent) => consent.name === key)!.label, // eslint-disable-line @typescript-eslint/no-non-null-assertion
          agree: Boolean(value),
        })),
    };

    await fetch("/consents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Submitted values", values);
  };

  return <Layout onSubmit={onSubmit} consents={consents} />;
};

export default Collect;
