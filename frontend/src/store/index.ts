import { applyMiddleware, compose, createStore, Middleware, Store } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

import reducers, { AllActions, RootState } from "./reducers";

const composeEnhancers =
  (typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares: readonly Middleware[] = [logger, ReduxThunk];

export const configureStore = (): Store<RootState, AllActions> => {
  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    module.hot.accept("./reducers", (): void => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export const aNewStore = (preloadedStore?: RootState): Store<RootState, AllActions> => {
  return createStore(reducers, preloadedStore, composeEnhancers(applyMiddleware(...middlewares)));
};
