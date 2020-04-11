import React from "react";

import Link from "../../../components/Link";
import Typography from "../../../components/Typography";

interface Props {
  readonly disabled: boolean;
  readonly children: string | number;
  readonly onPageSelected: () => void;
}

const PageLink: React.FunctionComponent<Props> = ({ disabled, children, onPageSelected }): JSX.Element => (
  <React.Fragment>
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
  </React.Fragment>
);

export default PageLink;
