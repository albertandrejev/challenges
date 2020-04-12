import React from "react";

import { Consent } from "../../../store/consents";
import Table from "./Table";

export default { title: "Show consents" };

function createData(name: string, email: string, titles: string[]): Consent {
  return { name, email, items: titles.map((title) => ({ title: title, agree: true })) };
}

const consents = [
  createData("Bojack Horseman", "bojack@horseman.com", ["Receive newsletter", "Be shown targeted ads"]),
  createData("Princess Carolyn", "princess@manager.com", ["Receive newsletter"]),
];

export const table = (): JSX.Element => <Table consents={consents} />;
