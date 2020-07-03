import React from "react";
import { createUseStyles } from "react-jss";
import { HeroProps } from "../types/props";
import { Parallax, Background } from "react-parallax";
import Image from "./Image";

const parallaxStrength = 1000;

const useStyles = createUseStyles({
  header: {
    minHeight: (props: HeroProps) => `${props.height}vh`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
  image: {
    width: "auto",
    height: `calc(100% + ${parallaxStrength}px)`,
  },
});

function Hero(props: HeroProps) {
  let classes = useStyles(props);

  const image = require(`../imgs/scaled/${props.imageName}`);
  const overlayImage = require(`../imgs/thumbnails/${props.imageName}`);

  const left = props.horizontalWeight
    ? `${100 - props.horizontalWeight}%`
    : "50%";

  return (
    <Parallax strength={1000} bgStyle={{ left }}>
      <header className={classes.header}>
        Coming Soon™. Current width: {props.pxWidth} px
      </header>
      <Background>
        <Image
          src={image}
          overlaySrc={overlayImage}
          className={classes.image}
          alt={props.imageName}
        />
      </Background>
    </Parallax>
  );
}

export default Hero;
