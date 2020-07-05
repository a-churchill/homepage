import React from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import { CardProps } from "../types/props";
import Image from "./Image";
import ReactMarkdown from "react-markdown"
import { shadowColor } from "../common/theming";

const cardPadding = 25;
export const cardWidth = 500;
export const cardMargin = 80;

const useStyles = createUseStyles((theme: AppTheme) => ({
  cardContainer: {
    width: cardWidth,
    marginLeft: cardMargin,
    textAlign: "left",
    boxShadow: (active: boolean) => (active ? `${shadowColor(0.3)} 0px 0px 30px 10px` : `${shadowColor(0.3)} 0px 0px 20px 3px`),
    position: "relative",
    padding: cardPadding,
    flexShrink: 0,
    transform: (active: boolean) => (active ? "scale(1.1)" : "scale(1)"),
    background: (active: boolean) => (active ? theme.colorHighlight : theme.colorBackground),
    transition: theme.animationSimple
  },
  icon: {
    height: 50,
    filter: `drop-shadow(0px 0px 5px ${shadowColor(0.5)})`,
    position: "absolute",
    right: cardPadding,
    top: cardPadding
  },
  title: {
    // position: "absolute",
    // left: cardPadding,
    top: cardPadding,
    fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"],
    fontSize: 50,
    margin: 0
  },
  subtitle: {
    fontFamily: ["concourse_t2_tabregular", "Helvetica", "sans-serif"],
    fontSize: 30,
    margin: 0
  },
  description: {
    '& a': {
      color: theme.colorPrimary,
    },
    margin: "0px 15px 0px 0px",
    fontFamily: ["concourse_t2_tabregular", "Helvetica", "sans-serif"],
    fontSize: 18,
  }
}));

function Card(props: CardProps) {
  const classes = useStyles(props.active);
  const icon = require(`../imgs/icons/${props.title.toLowerCase()}.png`);

  return (
    <div className={classes.cardContainer}>
      <p className={classes.title}>
        {props.title}
      </p>
      <p className={classes.subtitle}>
        {props.subtitle}
      </p>
      <div className={classes.description}>
        <ReactMarkdown source={props.description} />
      </div>
      <Image src={icon} alt={props.title} className={classes.icon} />
    </div>
  );
}

export default Card;
