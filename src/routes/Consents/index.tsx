import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "../../components/Typography";
import { loadConsentsAction } from "../../store/consents";
import { RootState } from "../../store/reducers";
import Layout from "./components/Layout";

const Consents: React.FunctionComponent = (): JSX.Element => {
  const consents = useSelector((state: RootState) => state.consents);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadConsentsAction());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {consents.loading && <Typography>Data is loading</Typography>}
      {consents.error && <Typography>Error: {consents.error}</Typography>}
      {!consents.loading && !consents.error && <Layout consents={consents.data} />}
    </React.Fragment>
  );
};

export default Consents;
