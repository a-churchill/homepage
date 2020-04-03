import React from "react";
import { createUseStyles } from "react-jss";
import { HeroProps } from "../types/props";
import { Parallax, Background } from "react-parallax";
import Image from "./Image";

const useStyles = createUseStyles({
  header: {
    minHeight: (props: HeroProps) => `${props.height}vh`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)"
  },
  image: {
    width: "2000px"
  }
});

function Hero(props: HeroProps) {
  let classes = useStyles(props);

  const image = require(`../imgs/scaled/${props.imageName}`);
  const overlayImage = require(`../imgs/thumbnails/${props.imageName}`);

  return (
    <Parallax strength={300}>
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
