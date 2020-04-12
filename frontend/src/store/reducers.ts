import { combineReducers, Reducer } from "redux";

import { ConsentActions, consentsReducer, ConsentsState } from "./consents";

export interface RootState {
  consents: ConsentsState;
}

export type AllActions = ConsentActions;

const createRootReducer = (): Reducer<RootState, AllActions> =>
  combineReducers({
    consents: consentsReducer,
  });

export default createRootReducer();
