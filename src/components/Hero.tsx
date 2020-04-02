import React from "react";
import { createUseStyles } from "react-jss";
import { HeroProps } from "../types/props";
import { Parallax } from "react-parallax";

const useStyles = createUseStyles({
  header: {
    minHeight: (props: HeroProps) => `${props.height}vh`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)"
  }
});

function Hero(props: HeroProps) {
  let classes = useStyles(props);

  return (
    <Parallax
      bgImage={props.image}
      strength={300}
      bgImageAlt="Artistic Photograph"
      blur={{ min: -2, max: 3 }}
    >
      <header className={classes.header}>
        Coming Soon™. Current width: {props.pxWidth} px
      </header>
    </Parallax>
  );
}

export default Hero;
