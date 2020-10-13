import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Background, Parallax } from 'react-parallax';

import { shadowColor } from '../common/theming';
import { HeroProps } from '../types/props';
import { AppTheme } from '../types/styles';
import Image from './Image';

const parallaxStrength = 1000;

const useStyles = createUseStyles((theme: AppTheme) => ({
  header: {
    minHeight: (props: HeroProps) => `${props.height}vh`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 4vh)",
    color: theme.colorText,
    textShadow: `0 0 2px ${shadowColor(0.3)}`,
  },
  image: {
    height: (props: HeroProps) =>
      `calc(${props.refHeight}px + ${props.mobile ? 0 : parallaxStrength}px)`,
  },
  box: {
    fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"],
    maxWidth: "60%",
    background: theme.colorBackground,
    borderRadius: 5,
    padding: 20,
    boxShadow: `0 0 30px 5px ${shadowColor(1)}`,
  },
}));

function Hero(props: HeroProps) {
  const [height, setHeight] = useState(0);
  const classes = useStyles({ refHeight: height, ...props });
  const heightRef = useRef(null);

  const resizeHandler = () => {
    const current = heightRef.current || { clientHeight: 0 };
    setHeight(current.clientHeight);
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [heightRef]);

  const image = require(`../imgs/scaled/${props.imageName}`);
  const overlayImage = require(`../imgs/thumbnails/${props.imageName}`);

  const left = props.horizontalWeight
    ? `${100 - props.horizontalWeight}%`
    : "50%";

  return (
    <div ref={heightRef}>
      <Parallax strength={props.mobile ? 0 : parallaxStrength} bgStyle={{ left }}>
        <header className={classes.header}>
          {props.box ? (
            <div className={classes.box}>{props.text}</div>
          ) : (
            props.text
          )}
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
    </div>
  );
}

export default Hero;
