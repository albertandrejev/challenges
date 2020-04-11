import React from "react";

import Box from "../../../components/Box";
import Link from "../../../components/Link";
import Typography from "../../../components/Typography";

interface Props {
  readonly disabled: boolean;
  readonly children: string;
  readonly onPageSelected: () => void;
}

const PageLink: React.FunctionComponent<Props> = ({ disabled, children, onPageSelected }): JSX.Element => (
  <Box marginLeft={2}>
    {disabled && (
      <Typography variant="body2" color="textSecondary">
        {children}
      </Typography>
    )}
    {!disabled && (
      <Link component="button" variant="body2" onClick={onPageSelected}>
        {children}
      </Link>
    )}
  </Box>
);

export default PageLink;
