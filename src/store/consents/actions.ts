import { AddConsentActionType, Consent } from "./reducer";

export const addConsentAction = (consent: Consent): AddConsentActionType => ({
  type: "@@consents/ADD",
  payload: consent,
});
