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

export type ConsentActions = ActionType<typeof actions>;

export type ConsentsState = readonly Consent[];
const initState: ConsentsState = [];

export function consentsReducer(state: ConsentsState = initState, action: ConsentActions): ConsentsState {
  switch (action.type) {
    case "@@consents/ADD":
      return [...state, action.payload];
    default:
      return state;
  }
}
