import React from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import { CardProps } from "../types/props";
import Image from "./Image";

const useStyles = createUseStyles((theme: AppTheme) => ({
  cardContainer: {
    margin: 10,
    textAlign: "center",
    boxShadow: "rgb(58, 65, 75) 0px 0px 10px 0px",
  },
}));

function Card(props: CardProps) {
  const classes = useStyles();
  const icon = require(`../imgs/icons/${props.imageName}`);

  return (
    <div className={classes.cardContainer}>
      Test Text
      <Image src={icon} alt="icon" />
    </div>
  );
}

export default Card;
