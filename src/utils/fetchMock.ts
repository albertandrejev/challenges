import fetchMock from "fetch-mock";

import { Consent } from "../store/consents";

const consents: Consent[] = [
  {
    name: "Bojack Horseman",
    email: "bojack@horseman.com",
    items: [
      { title: "Receive newsletter", agree: true },
      { title: "Be shown targeted ads", agree: true },
    ],
  },
  {
    name: "Princess Carolyn",
    email: "princess@manager.com",
    items: [{ title: "Receive newsletter", agree: true }],
  },
];

function setFetchMocks(): void {
  fetchMock.get("/consents", consents, {
    delay: 1000,
  });

  fetchMock.post("/consents", 200, {
    delay: 1000,
  });
}

export default setFetchMocks;
