import { makeStyles } from "@material-ui/core";
import React from "react";

import Paper from "../../../components/Paper";
import Table from "../../../components/Table";
import TableBody from "../../../components/TableBody";
import TableCell from "../../../components/TableCell";
import TableContainer from "../../../components/TableContainer";
import TableHead from "../../../components/TableHead";
import TableRow from "../../../components/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface RowData {
  readonly name: string;
  readonly email: string;
  readonly consents: string;
}

function createData(name: string, email: string, consents: string): RowData {
  return { name, email, consents };
}

const rows = [
  createData("Bojack Horseman", "bojack@horseman.com", "Receive newsletter, Be shown targeted ads"),
  createData("Princess Carolyn", "princess@manager.com", "Receive newsletter"),
];

const Layout: React.FunctionComponent = (): JSX.Element => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Consent given for</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.consents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Layout;
