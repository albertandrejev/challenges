import { Dispatch } from "redux";

import {
  AddConsentActionType,
  Consent,
  SetConsentsActionType,
  SetErrorActionType,
  SetLoadingActionType,
} from "./reducer";

export const postConsentAction = (consents: Consent[]) => (dispatch: Dispatch) => {
  dispatch(setConsentAction(consents));
};

export const addConsentAction = (consent: Consent): AddConsentActionType => ({
  type: "@@consents/ADD",
  payload: consent,
});

export const setConsentAction = (consents: Consent[]): SetConsentsActionType => ({
  type: "@@consents/SET",
  payload: consents,
});

export const setLoadingAction = (isLoading: boolean): SetLoadingActionType => ({
  type: "@@consents/LOADING",
  payload: isLoading,
});

export const setErrorAction = (message: Error, error: boolean): SetErrorActionType => ({
  type: "@@consents/ERROR",
  payload: message,
  error: error,
});
