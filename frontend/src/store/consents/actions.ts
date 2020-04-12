import { Dispatch } from "redux";

import { Consent, SetConsentsActionType, SetErrorActionType, SetLoadingActionType } from "./reducer";

export const loadConsentsAction = () => async (dispatch: Dispatch) => {
  dispatch(setLoadingAction(true));
  try {
    const result = await fetch("/consents");
    if (result.ok) {
      const consents = await result.json();
      dispatch(setConsentsAction(consents));
    } else {
      dispatch(setErrorAction(new Error("Unable to load data"), true));
    }
  } catch (err) {
    dispatch(setErrorAction(err, true));
  }
};

export const setConsentsAction = (consents: Consent[]): SetConsentsActionType => ({
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
