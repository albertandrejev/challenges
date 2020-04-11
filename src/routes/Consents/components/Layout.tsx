import React from "react";

import Box from "../../../components/Box";
import { Consent } from "../../../store/consents";
import Pagination from "./Pagination";
import Table, { TABLE_WIDTH } from "./Table";

export const CONSENTS_PER_PAGE = 2;

interface Props {
  readonly consents: Consent[];
}

const Layout: React.FunctionComponent<Props> = ({ consents }): JSX.Element => {
  const [pageConsents, setPageConsents] = React.useState(consents.slice(0, CONSENTS_PER_PAGE));

  const onPageSelected = (page: number): void => {
    const pageIdx = page - 1;
    const startIdx = pageIdx * CONSENTS_PER_PAGE;
    const endIdx = startIdx + CONSENTS_PER_PAGE;
    setPageConsents(consents.slice(startIdx, endIdx));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={5} maxWidth={TABLE_WIDTH}>
      <Table consents={pageConsents} />
      <Pagination total={consents.length} perPage={CONSENTS_PER_PAGE} onPageSelected={onPageSelected} />
    </Box>
  );
};

export default Layout;
