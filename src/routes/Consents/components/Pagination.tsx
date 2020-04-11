import React from "react";

import Box from "../../../components/Box";
import PageLink from "./PageLink";
import PageSelector from "./PageSelector";

/*
This is possible to use Material UI Table's pagination component, 
but I wanted to keep look and feel like on wireframe
*/

interface Props {
  readonly total: number;
  readonly perPage: number;
  readonly onPageSelected: (page: number) => void;
}

const pagesRange = (max: number): number[] => {
  const range: number[] = [];
  for (let i = 1; i <= max; i++) {
    range.push(i);
  }

  return range;
};

const Pagination: React.FunctionComponent<Props> = ({ total, perPage, onPageSelected }): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(total / perPage);

  const onPage = (page: number) => () => {
    onPageSelected(page);
    setCurrentPage(page);
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      onPage(currentPage - 1)();
    }
  };

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      onPage(currentPage + 1)();
    }
  };

  return (
    <Box display="flex" flexDirection="row" width="100%">
      <PageLink disabled={currentPage === 1} onPageSelected={prevPage}>
        &lt;&lt; Previous page
      </PageLink>
      <Box flexGrow={1} />
      {pagesRange(totalPages).map((page) => (
        <PageSelector
          key={page}
          page={page}
          margin={2}
          onPageSelected={onPage(page)}
          currentPage={page === currentPage}
        />
      ))}
      <Box flexGrow={1} />
      <PageLink disabled={currentPage === totalPages} onPageSelected={nextPage}>
        Next page &gt;&gt;
      </PageLink>
    </Box>
  );
};

export default Pagination;
