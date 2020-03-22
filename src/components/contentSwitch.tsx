import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import UserData from "../data/users";
import Users from "./userTable";
import AddUser from "../components/addUser";
import Annoucemenets from "../components/announcement";

type NavItem = {
  link: string;
  Content: React.FC;
};

interface ContentSwitchProps {}

const ContentSwitch: React.FC<ContentSwitchProps> = () => {
  const [users] = useState(UserData);
  return (
    <Switch>
      <Route path="/users">
        <Users usersData={users} />
      </Route>
      <Route path="/addUser">
        <AddUser />
      </Route>
      <Route path="/">
        <Annoucemenets />
      </Route>
    </Switch>
  );
};

export default ContentSwitch;
