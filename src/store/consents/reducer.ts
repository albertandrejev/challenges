import { Action } from "redux";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";

export interface ConsentItem {
  readonly title: string;
  readonly agree: boolean;
}

export interface Consent {
  readonly name: string;
  readonly email: string;
  readonly items: ConsentItem[];
}

export interface AddConsentActionType extends Action {
  type: "@@consents/ADD";
  payload: Consent;
}

export interface SetConsentsActionType extends Action {
  type: "@@consents/SET";
  payload: Consent[];
}

export interface SetLoadingActionType extends Action {
  type: "@@consents/LOADING";
  payload: boolean;
}

export interface SetErrorActionType extends Action {
  type: "@@consents/ERROR";
  payload: Error;
  error: boolean;
}

export type ConsentActions = ActionType<typeof actions>;

export interface ConsentsState {
  readonly loading: boolean;
  readonly data: readonly Consent[];
  readonly error: Error | undefined;
}

const initState: ConsentsState = { loading: false, data: [], error: undefined };

export function consentsReducer(state: ConsentsState = initState, action: ConsentActions): ConsentsState {
  switch (action.type) {
    case "@@consents/SET":
      return {
        loading: false,
        error: undefined,
        data: action.payload,
      };
    case "@@consents/LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "@@consents/ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
