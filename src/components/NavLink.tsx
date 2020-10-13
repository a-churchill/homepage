import React from 'react';
import { createUseStyles } from 'react-jss';
import { animateScroll as scroll } from 'react-scroll';

import { NavLinkProps } from '../types/props';
import { AppTheme } from '../types/styles';

const buttonBehavior = {
  outline: "none",
};

const useStyles = createUseStyles((theme: AppTheme) => ({
  navLink: {
    margin: 15,
    marginLeft: 3,
    marginRight: 3,
  },
  navButton: {
    fontSize: "1.5rem",
    color: (props: NavLinkProps) => (props.active ? theme.colorPrimary : ""),
    "&:hover": {
      color: (props: NavLinkProps) =>
        props.active ? theme.colorPrimary : theme.colorSecondary,
      ...buttonBehavior,
    },
    "&:focus": {
      color: (props: NavLinkProps) =>
        props.active ? theme.colorPrimary : theme.colorSecondary,
      ...buttonBehavior,
    },
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: 1.5,
      bottom: 1,
      left: 0,
      backgroundColor: (props: NavLinkProps) =>
        props.active ? theme.colorPrimary : theme.colorSecondary,
      visibility: (props: NavLinkProps) =>
        props.active ? "visible" : "hidden",
      transform: (props: NavLinkProps) =>
        props.active ? "scaleX(0.8)" : "scaleX(0)",
      transition: theme.animationExciting,
    },
    "&:hover:before": {
      visibility: "visible",
      transform: "scaleX(0.8)",
    },
    transition: theme.animationExciting,
  },
}));

function NavLink(props: NavLinkProps) {
  const classes = useStyles(props);
  return (
    <li className={classes.navLink}>
      <span style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={() => {
            scroll.scrollTo(props.scrollTo);
          }}
          className={classes.navButton}
        >
          {props.name}
        </button>
      </span>
    </li>
  );
}

export default NavLink;
