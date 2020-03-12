import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./users";
import AddUser from "./addUser";
import Announcements from "./announcement";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
  })
);

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Neoteric - aplikacja management
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />

          <List>
            <ListItem button component={Link} to={"/"}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Strona główna" />
            </ListItem>
            <ListItem button component={Link} to={"/users"}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Uczestnicy" />
            </ListItem>
            <ListItem button component={Link} to="/addUser">
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Nowy uczestnik" />
            </ListItem>
            <ListItem button component={Link} to="/announce">
              <ListItemIcon>
                <AnnouncementIcon />
              </ListItemIcon>
              <ListItemText primary="Ważne komunikaty" />
            </ListItem>
          </List>

          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/addUser">
              <AddUser />
            </Route>
            <Route path="/announce">
              <Announcements />
            </Route>
            <Route path="/">
              <div>"Dashboard hollow"</div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
