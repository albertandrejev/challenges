import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

import { COLLECT_ROUTE, CONSENTS_ROUTE } from "../../routes/paths";
import Box from "../Box";
import Drawer from "../Drawer";
import List from "../List";
import ListItem from "../ListItem";
import ListItemText from "../ListItemText";

interface StyleProps {
  readonly drawerWidth: number;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  drawer: (props) => ({
    width: props.drawerWidth,
    flexShrink: 0,
  }),
  drawerPaper: (props) => ({
    width: props.drawerWidth,
  }),
}));

interface Props {
  readonly children: React.ReactNode;
}

const Main: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  const history = useHistory();
  const classes = useStyles({ drawerWidth: 200 });

  const onGiveConsent = (): void => history.push(COLLECT_ROUTE);
  const onCollectedConsents = (): void => history.push(CONSENTS_ROUTE);

  return (
    <Box display="flex">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem button onClick={onGiveConsent}>
            <ListItemText primary="Give consent" />
          </ListItem>
          <ListItem button onClick={onCollectedConsents}>
            <ListItemText primary="Collected consents" />
          </ListItem>
        </List>
      </Drawer>
      <Box flexGrow={1} padding={3}>
        {children}
      </Box>
    </Box>
  );
};

export default Main;
