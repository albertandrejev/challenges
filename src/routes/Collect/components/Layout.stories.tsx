import { action } from "@storybook/addon-actions";
import React from "react";

import Layout, { ConsentValue } from "./Layout";

export default { title: "Collect consents" };

const consents: ConsentValue[] = [
  { name: "news", label: "Receive newsletter" },
  { name: "ads", label: "Be shown targeted ads" },
  { name: "stats", label: "Contribute to anonymous usage statistics" },
];

export const main = (): JSX.Element => <Layout onSubmit={action("onSubmit")} consents={consents} />;
