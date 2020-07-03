import React from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import Card from "./Card";

const useStyles = createUseStyles((theme: AppTheme) => ({
  flexContainer: {
    height: "75vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  event: {
    width: 200,
    margin: 10,
    textAlign: "center",
  },
}));

function Timeline() {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <Card
        title="MIT"
        subtitle="Cambridge, MA"
        description="Lorem ipsum dolores ..."
        imageName="mit.png"
      />
    </div>
  );
}

export default Timeline;
