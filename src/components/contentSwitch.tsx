import React from "react";
import { Switch, Route } from "react-router-dom";

type NavItem = {
  link: string;
  Content: React.FC | React.ReactNode | React.ElementType;
};

export interface ContentSwitchProps {
  NavRoute: Array<NavItem>;
}

const ContentSwitch: React.FC<ContentSwitchProps> = props => {
  const NavRoute = props.NavRoute.reverse();
  return (
    <Switch>
      {NavRoute.map(route => {
        return <Route path={route.link}>{route.Content}</Route>;
        // return <Route path={route.link}{<route.Content />}></Route>;
      })}
    </Switch>
  );
};

export default ContentSwitch;
