import React from "react";

import { Consent } from "../../../store/consents";
import Layout from "./Layout";

export default { title: "Show consents" };

function createData(name: string, email: string, titles: string[]): Consent {
  return { name, email, items: titles.map((title) => ({ title: title, agree: true })) };
}

const consents = [
  createData("Bojack Horseman", "bojack@horseman.com", ["Receive newsletter", "Be shown targeted ads"]),
  createData("Princess Carolyn", "princess@manager.com", ["Receive newsletter"]),
  createData("User one", "one@user.com", ["Receive newsletter", "Contribute to anonymous usage statistics"]),
  createData("User two", "two@user.com", ["Receive newsletter", "Contribute to anonymous usage statistics"]),
  createData("User three", "three@user.com", [
    "Be shown targeted ads",
    "Contribute to anonymous usage statistics",
  ]),
  createData("User four", "four@user.com", [
    "Be shown targeted ads",
    "Receive newsletter",
    "Contribute to anonymous usage statistics",
  ]),
  createData("User five", "five@user.com", ["Receive newsletter", "Be shown targeted ads"]),
  createData("User six", "six@user.com", ["Receive newsletter", "Contribute to anonymous usage statistics"]),
];

export const layout = (): JSX.Element => <Layout consents={consents} />;
