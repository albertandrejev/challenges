/* eslint-disable no-global-assign */
/* eslint-disable no-native-reassign */

import { Consent } from "../store/consents";
import sleep from "./test/sleep";

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

const oldFetch = window.fetch;

async function getConsentsJson(): Promise<any> {
  return consents;
}

async function fetchMock(input: RequestInfo, init?: RequestInit | undefined): Promise<Response> {
  if (typeof input === "string" && input === "/consents") {
    if (!init) {
      await sleep(1000); // Add delay before returning answer, simulating network latency

      // NB! If you do not need to use @ts-ignore anymore, then please remove "@typescript-eslint/ban-ts-ignore"
      // rule from .eslintrc.js
      // @ts-ignore
      return {
        ok: true,
        json: getConsentsJson,
      };
    } else if (init.method === "POST" && init.body && typeof init.body === "string") {
      consents.push(JSON.parse(init.body));
      // @ts-ignore
      return {
        ok: true,
      };
    }
  }

  return oldFetch(input, init);
}

function setFetchMocks(): void {
  window.fetch = fetchMock;
}

export default setFetchMocks;
