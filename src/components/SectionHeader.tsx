import React from 'react';
import { SectionHeaderProps } from '../types/props';
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import ReactMarkdown from 'react-markdown';

type HeaderProps = {
  header: string;
  context: string;
}

const textPadding = 50;
const headerWidth = "min(max(30%, 200px), 300px)"; // between 200 and 300px
const useStyles = createUseStyles((theme: AppTheme) => ({
  container: {
    display: "flex",
    flexDirection: (reverse: boolean) => (reverse ? "row-reverse" : "row"),
    justifyContent: "flex-start",
    alignItems: "center",
    background: theme.colorSecondary,
    paddingTop: 50,
    paddingBottom: 50
  },
  header: {
    width: headerWidth,
    textAlign: (reverse: boolean) => (reverse ? "left" : "right"),
    paddingRight: (reverse: boolean) => (reverse ? 10 : textPadding),
    paddingLeft: (reverse: boolean) => (reverse ? textPadding : 10),
    fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"],
    color: theme.colorHighlight,
    fontSize: "calc(10px + 4vmin)",
  },
  line: {
    borderLeft: `1px solid ${theme.colorHighlight}`,
    height: 200
  },
  context: {
    width: `min(550px, calc(100% - ${headerWidth}))`,
    textAlign: (reverse: boolean) => (reverse ? "right" : "left"),
    paddingLeft: (reverse: boolean) => (reverse ? 10 : textPadding),
    paddingRight: (reverse: boolean) => (reverse ? textPadding : 10),
    fontFamily: ["concourse_t2_tabregular", "Helvetica", "sans-serif"],
    color: theme.colorHighlight,
    fontSize: 20,
  }
}));

function SectionHeader(props: SectionHeaderProps) {
  const classes = useStyles(props.reverse);

  const headerProps = require(`../content/${props.contentFile}`) as HeaderProps
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{headerProps.header}</p>
      </div>
      <div className={classes.line} />
      <div className={classes.context}>
        <ReactMarkdown source={headerProps.context} />
      </div>
    </div>
  )
}

export default SectionHeader;