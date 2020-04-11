import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import MainMenu from "../components/MainMenu";
import Collect from "./Collect";
import Consents from "./Consents";
import { COLLECT_ROUTE, CONSENTS_ROUTE } from "./paths";

const Main: React.FunctionComponent = (): JSX.Element => {
  return (
    <MainMenu>
      <Switch>
        <Redirect exact from="/" to={COLLECT_ROUTE} />
        <Route path={COLLECT_ROUTE} component={Collect} />
        <Route path={CONSENTS_ROUTE} component={Consents} />
      </Switch>
    </MainMenu>
  );
};

export default Main;
