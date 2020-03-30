import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface INavItemProps {
  Item: {
    link: string;
    desc: string;
    Icon: React.ComponentType<SvgIconProps>;
  };
}

const NavItem: React.FunctionComponent<INavItemProps> = props => {
  let { link, desc, Icon } = props.Item;
  return (
    <>
      <ListItem button component={Link} to={link} key={link}>
        <ListItemIcon>{<Icon />}</ListItemIcon>
        <ListItemText primary={desc} />
      </ListItem>
    </>
  );
};

export default NavItem;
