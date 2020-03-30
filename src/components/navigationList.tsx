import React from "react";
import List from "@material-ui/core/List";
import NavItem from "./navItem";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface element {
  link: string;
  desc: string;
  Icon: React.ComponentType<SvgIconProps>;
}

export interface NavigationListProps {
  navItems: Array<element>;
}

const NavigationList: React.FC<NavigationListProps> = props => {
  return (
    <List>
      {props.navItems.map((item, index) => {
        return <NavItem key={index} Item={item} />;
      })}
    </List>
  );
};

export default NavigationList;
