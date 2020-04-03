import React from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";

const useStyles = createUseStyles((theme: AppTheme) => ({
  flexContainer: {
    height: "75vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  event: {
    width: 200,
    margin: 10,
    textAlign: "center"
  }
}));

function Timeline() {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <div className={classes.event}>Event 1</div>
      <div className={classes.event}>Event 2</div>
      <div className={classes.event}>Event 3</div>
    </div>
  );
}

export default Timeline;
