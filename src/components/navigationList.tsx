import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface element {
  link: string;
  desc: string;
  icon: React.ReactType<SvgIconProps>;
}

export interface NavigationListProps {
  // navElements: {
  //   [key: string]: elementObject;
  // };
  navElements: Array<element>;
}

const NavigationList: React.FC<NavigationListProps> = props => {
  return (
    <List>
      {props.navElements.map(element => {
        return (
          <ListItem
            button
            component={Link}
            to={element.link}
            key={element.link}
          >
            <ListItemIcon>{<element.icon />}</ListItemIcon>
            <ListItemText primary={element.desc} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default NavigationList;
