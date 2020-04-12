import React from "react";

import Box from "../../../components/Box";
import PageLink from "./PageLink";

interface Props {
  readonly page: number;
  readonly margin?: number | string;
  readonly currentPage: boolean;
  readonly onPageSelected: () => void;
}

const Pagination: React.FunctionComponent<Props> = ({
  page,
  onPageSelected,
  currentPage,
  margin = 0,
}): JSX.Element => {
  return (
    <Box marginLeft={margin}>
      <PageLink disabled={currentPage} onPageSelected={onPageSelected}>
        {page}
      </PageLink>
    </Box>
  );
};

export default Pagination;
