import React from "react";
import { IconProps } from "../types/props";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";

const linkBehavior = (theme: AppTheme) => ({
  textDecoration: "none",
  outline: "none",
  color: theme.colorPrimary
});

const useStyles = createUseStyles((theme: AppTheme) => ({
  footerIconLink: {
    color: theme.colorText,
    padding: 8,
    "&:hover": linkBehavior(theme),
    "&:active": linkBehavior(theme),
    "&:focus": linkBehavior(theme)
  },
  list: {
    padding: 0,
    margin: 0,
    display: "inline"
  }
}));

function Icon(props: IconProps) {
  const classes = useStyles();
  return (
    <li className={classes.list}>
      <a
        href={props.link}
        className={classes.footerIconLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`icon-${props.name}`}></i>
      </a>
    </li>
  );
}

export default Icon;
