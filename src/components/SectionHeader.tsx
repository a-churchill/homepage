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
const smallTextPadding = 20;
const headerWidth = "min(max(30%, 200px), 300px)"; // between 200 and 300px
const mobileWidth = "70vw"
const useStyles = createUseStyles((theme: AppTheme) => ({
  container: {
    display: "flex",
    flexDirection: (props: SectionHeaderProps) => (props.mobile ? "column" : "row" + props.reverse ? "-reverse" : ""),
    justifyContent: "flex-start",
    alignItems: "center",
    background: theme.colorSecondary,
    paddingTop: 50,
    paddingBottom: 50,
    '& p': {
      margin: 0
    }
  },
  header: {
    width: (props: SectionHeaderProps) => (props.mobile ? mobileWidth : headerWidth),
    textAlign: (props: SectionHeaderProps) => (props.mobile ? "center" : (props.reverse ? "left" : "right")),
    paddingRight: (props: SectionHeaderProps) => (props.reverse || props.mobile ? smallTextPadding : textPadding),
    paddingLeft: (props: SectionHeaderProps) => (!props.reverse || props.mobile ? smallTextPadding : textPadding),
    paddingBottom: smallTextPadding,
    paddingTop: smallTextPadding,
    fontFamily: ["concourse_c2_tabregular", "Helvetica", "sans-serif"],
    color: theme.colorHighlight,
    fontSize: "calc(10px + 3.5vh)",
  },
  horizontalLine: {
    borderTop: `1px solid ${theme.colorHighlight}`,
    width: 150
  },
  verticalLine: {
    borderLeft: `1px solid ${theme.colorHighlight}`,
    height: 200
  },
  context: {
    width: (props: SectionHeaderProps) => (props.mobile ? mobileWidth : `min(550px, calc(100% - ${headerWidth}))`),
    textAlign: (props: SectionHeaderProps) => (!props.reverse || props.mobile ? "left" : "right"),
    paddingRight: (props: SectionHeaderProps) => (!props.reverse || props.mobile ? smallTextPadding : textPadding),
    paddingLeft: (props: SectionHeaderProps) => (props.reverse || props.mobile ? smallTextPadding : textPadding),
    paddingBottom: smallTextPadding,
    paddingTop: smallTextPadding,
    fontFamily: ["concourse_t2_tabregular", "Helvetica", "sans-serif"],
    color: theme.colorHighlight,
    fontSize: 20,
  }
}));

function SectionHeader(props: SectionHeaderProps) {
  const classes = useStyles(props);

  const headerProps = require(`../content/${props.contentFile}`) as HeaderProps
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>{headerProps.header}</p>
      </div>
      <div className={props.mobile ? classes.horizontalLine : classes.verticalLine} />
      <div className={classes.context}>
        <ReactMarkdown source={headerProps.context} />
      </div>
    </div>
  )
}

export default SectionHeader;