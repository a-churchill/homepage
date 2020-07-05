import React from "react";
import { createUseStyles } from "react-jss";
import { HeroProps } from "../types/props";
import { Parallax, Background } from "react-parallax";
import Image from "./Image";
import { AppTheme } from "../types/styles";
import { shadowColor } from "../common/theming";

const parallaxStrength = 1000;

const useStyles = createUseStyles((theme: AppTheme) => ({
  header: {
    minHeight: (props: HeroProps) => `${props.height}vh`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(30px + 4vmin)",
    color: (props: HeroProps) => (props.lightText ? theme.colorHighlight : theme.colorText),
    textShadow: `0 0 10px ${shadowColor(1)}`
  },
  image: {
    width: "auto",
    height: `calc(100% + ${parallaxStrength}px)`,
  },
}));

function Hero(props: HeroProps) {
  let classes = useStyles(props);

  const image = require(`../imgs/scaled/${props.imageName}`);
  const overlayImage = require(`../imgs/thumbnails/${props.imageName}`);

  const left = props.horizontalWeight
    ? `${100 - props.horizontalWeight}%`
    : "50%";

  return (
    <Parallax strength={700} bgStyle={{ left }}>
      <header className={classes.header}>
        {props.text}
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
