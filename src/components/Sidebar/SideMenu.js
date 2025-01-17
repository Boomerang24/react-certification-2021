import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Home, Menu } from "../NavBar/NavBar.styles";
import { Link } from "react-router-dom";
import { VideosContext } from "../providers/VideosProvider";
import { filterRoutes } from "./sidebarData";
import { Tooltip } from "@material-ui/core";

const anchor = "left";

export default function SideMenu() {
  const {
    globalState: { theme },
    loggedIn,
  } = useContext(VideosContext);

  const useStyles = makeStyles({
    list: {
      width: 200,
    },
    fullList: {
      width: "auto",
    },
    paper: {
      background: theme.body,
    },
  });

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      // className={classes.list}
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {filterRoutes(loggedIn).map((item, index) => {
          return (
            <Link to={item.path} key={index}>
              <ListItem button key={index} style={{ color: theme.fontcolor }}>
                <ListItemIcon style={{ color: theme.fontcolor }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <div data-testid="navbar-menu">
        {
          <React.Fragment key={anchor}>
            <Tooltip title="Menu">
              <Button onClick={toggleDrawer(anchor, true)}>
                <Menu />
              </Button>
            </Tooltip>
            <Drawer
              classes={{ paper: classes.paper }}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        }
      </div>
      <Link to="/">
        <Home />
      </Link>
    </>
  );
}
