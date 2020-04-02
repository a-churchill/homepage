import React from "react";
import Icon from "./Icon";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";

const useStyles = createUseStyles((theme: AppTheme) => ({
  footer: {
    position: "absolute",
    bottom: 40,
    right: "1.5em",
    left: "1.5em",
    padding: "0 20px"
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <ul>
        <Icon
          name="github"
          key="github"
          link="https://github.com/a-churchill"
        />
        <Icon
          name="twitter"
          key="twitter"
          link="https://twitter.com/AndrewChurchiII"
        />
        <Icon
          name="facebook"
          key="facebook"
          link="https://www.facebook.com/xxaxdxcxx"
        />
        <Icon
          name="instagram"
          key="instagram"
          link="https://www.instagram.com/andrewchurchil"
        />
        <Icon
          name="linkedin"
          key="linkedin"
          link="https://www.linkedin.com/in/andrew-d-churchill/"
        />
      </ul>
    </div>
  );
}

export default Footer;
