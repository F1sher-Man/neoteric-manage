import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "./userTable";
import AddUser from "../components/addUser";
import Annoucemenets from "../components/announcement";
import { IUser } from "../data/users";

interface ContentSwitchProps {
  allUsers: Array<IUser>;
  handleAddUser(newUser: IUser): void;
}

const ContentSwitch: React.FC<ContentSwitchProps> = ({
  allUsers,
  handleAddUser
}) => {
  return (
    <Switch>
      <Route path="/users">
        <Users usersData={allUsers} />
      </Route>
      <Route path="/addUser">
        <AddUser onUserAdd={handleAddUser} />
      </Route>
      <Route path="/">
        <Annoucemenets />
      </Route>
    </Switch>
  );
};

export default ContentSwitch;
