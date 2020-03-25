import React from "react";
import List from "@material-ui/core/List";
import NavItem from "./navItem";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface element {
  link: string;
  desc: string;
  Icon: React.ReactType<SvgIconProps>;
}

export interface NavigationListProps {
  navItems: Array<element>;
}

const NavigationList: React.FC<NavigationListProps> = props => {
  let listId = 0;
  return (
    <List>
      {props.navItems.map(item => {
        listId++;
        return <NavItem key={listId} Item={item} />;
      })}
    </List>
  );
};

export default NavigationList;
