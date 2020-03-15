import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./users";
import AddUser from "./addUser";
import Announcements from "./announcement";

export interface ContentSwitchProps {}

const ContentSwitch: React.SFC<ContentSwitchProps> = props => {
  return (
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
  );
};

export default ContentSwitch;
