import { Store } from "redux";

import { aNewStore } from "../../store";
import { randomString } from "../../utils/test/random";
import { AllActions, RootState } from "../reducers";
import { Consent } from ".";
import { addConsentAction } from "./actions";

describe("Consents reducer", () => {
  let store: Store<RootState, AllActions>;
  beforeEach(() => {
    store = aNewStore();
  });

  it("has correct initial state", async () => {
    const consents = store.getState().consents;
    expect(consents).toEqual({ loading: false, data: [], error: undefined });
  });

  it("dispatches consent correctly", async () => {
    const store = aNewStore();
    const consent: Consent = {
      name: randomString(10),
      email: `${randomString(10)}@${randomString(5)}`,
      items: [
        { title: randomString(10), agree: true },
        { title: randomString(10), agree: false },
        { title: randomString(10), agree: true },
      ],
    };
    store.dispatch(addConsentAction(consent));
    const consents = store.getState().consents;
    expect(consents.data).toEqual([consent]);
  });
});
