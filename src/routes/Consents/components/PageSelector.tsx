import React from "react";

import Box from "../../../components/Box";
import PageLink from "./PageLink";

interface Props {
  readonly page: number;
  readonly currentPage: boolean;
  readonly onPageSelected: () => void;
}

const Pagination: React.FunctionComponent<Props> = ({ page, onPageSelected, currentPage }): JSX.Element => {
  return (
    <Box marginLeft={2}>
      <PageLink disabled={currentPage} onPageSelected={onPageSelected}>
        {page.toString()}
      </PageLink>
    </Box>
  );
};

export default Pagination;
