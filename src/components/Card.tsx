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
    // affected by mobile or active state
    background: (props: CardProps) => (props.active || props.mobile ? theme.colorHighlight : theme.colorBackground),

    // affected by mobile state
    width: `min(${cardWidth}px, calc(100% - ${cardMargin}px))`,
    marginLeft: (props: CardProps) => (props.mobile ? 0 : cardMargin),
    marginBottom: (props: CardProps) => (props.mobile ? cardMargin / 2 : ""),

    // affected by active state
    transform: (props: CardProps) => (props.active ? "scale(1.1)" : "scale(1)"),
    boxShadow: (props: CardProps) => (props.active ? `${shadowColor(0.3)} 0px 0px 30px 10px` : `${shadowColor(0.3)} 0px 0px 20px 3px`),

    // applies to any state
    textAlign: "left",
    position: "relative",
    padding: cardPadding,
    flexShrink: 0,
    transition: theme.animationSimple
  },
  icon: {
    // affected by mobile state
    position: (props: CardProps) => (props.mobile ? "" : "absolute"),
    margin: (props: CardProps) => (props.mobile ? "auto" : ""),
    display: (props: CardProps) => (props.mobile ? "block" : ""),

    // applies to any state
    height: 50,
    filter: `drop-shadow(0px 0px 5px ${shadowColor(0.5)})`,
    right: cardPadding,
    top: cardPadding,
    paddingBottom: cardPadding,
  },
  title: {
    // affected by mobile state
    textAlign: (props: CardProps) => (props.mobile ? "center" : ""),

    // applies to any state
    top: cardPadding,
    fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"],
    fontSize: 50,
    margin: 0
  },
  subtitle: {
    // affected by mobile state
    textAlign: (props: CardProps) => (props.mobile ? "center" : ""),

    // applies to any state
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
  const classes = useStyles(props);
  const icon = require(`../imgs/icons/${props.title.toLowerCase()}.png`);

  return (
    <div className={classes.cardContainer}>
      <Image src={icon} alt={props.title} className={classes.icon} />
      <p className={classes.title}>
        {props.title}
      </p>
      <p className={classes.subtitle}>
        {props.subtitle}
      </p>
      <div className={classes.description}>
        <ReactMarkdown source={props.description} />
      </div>
    </div>
  );
}

export default Card;
