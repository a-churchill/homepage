import React from "react";
import { NavLinkProps } from "../types/props";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import { animateScroll as scroll } from "react-scroll";

const buttonBehavior = {
  textDecoration: "none",
  outline: "none"
};

const useStyles = createUseStyles((theme: AppTheme) => ({
  navLink: {
    marginTop: 15
  },
  navButton: {
    fontSize: 24,
    color: (props: NavLinkProps) => (props.active ? theme.colorPrimary : ""),
    textDecoration: (props: NavLinkProps) =>
      props.active ? "underline" : "none",
    "&:hover": {
      color: theme.colorSecondary,
      ...buttonBehavior
    },
    "&:active": {
      color: theme.colorPrimary,
      ...buttonBehavior
    },
    "&:focus": {
      // color: theme.colorPrimary,
      ...buttonBehavior,
      textDecoration: "underline"
    }
  }
}));

function NavLink(props: NavLinkProps) {
  const classes = useStyles(props);
  return (
    <li className={classes.navLink}>
      <button
        onClick={() => {
          scroll.scrollTo(props.scrollTo);
        }}
        className={classes.navButton}
      >
        {props.name}
      </button>
    </li>
  );
}

export default NavLink;
