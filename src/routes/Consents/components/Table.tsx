import { makeStyles } from "@material-ui/core";
import React from "react";

import Paper from "../../../components/Paper";
import Table from "../../../components/Table";
import TableBody from "../../../components/TableBody";
import TableCell from "../../../components/TableCell";
import TableContainer from "../../../components/TableContainer";
import TableHead from "../../../components/TableHead";
import TableRow from "../../../components/TableRow";
import { Consent } from "../../../store/consents";

export const TABLE_WIDTH = 960;

const useStyles = makeStyles({
  table: {
    width: TABLE_WIDTH,
  },
  cell: {
    width: "200px",
  },
});

interface Props {
  readonly consents: Consent[];
}

const ConsentsTable: React.FunctionComponent<Props> = ({ consents }): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="consents table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.cell}>
              Name
            </TableCell>
            <TableCell align="center" className={classes.cell}>
              Email
            </TableCell>
            <TableCell align="center">Consent given for</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {consents.map((consent) => (
            <TableRow key={consent.name}>
              <TableCell>{consent.name}</TableCell>
              <TableCell>{consent.email}</TableCell>
              <TableCell>
                {consent.items
                  .filter((item) => item.agree)
                  .map((item) => item.title)
                  .join(", ")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsentsTable;
