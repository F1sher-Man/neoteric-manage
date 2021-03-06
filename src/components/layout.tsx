import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationList from "./navigationList";
import ContentSwitch from "./contentSwitch";
import NavigationData from "../data/navigation";
import UserData from "../data/users";
import { IUser } from "../data/users";
import UserMessages from "../const/userMessages.const";

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
  const [users, setUsers] = useState(UserData);
  const classes = useStyles();

  function AddUser(newUser: IUser): void {
    newUser.id = users.length + 1;
    const allUsers = users;
    allUsers.push(newUser);
    setUsers(allUsers);
    alert(UserMessages.USER_ADDED_SUCCEED);
  }

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
          <NavigationList navItems={NavigationData} />
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <ContentSwitch allUsers={users} handleAddUser={AddUser} />
        </main>
      </Router>
    </div>
  );
}
