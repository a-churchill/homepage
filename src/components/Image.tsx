import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import { ImageProps } from "../types/props";
import placeholder from "../imgs/thumbnails/placeholder.png";

const useStyles = createUseStyles((theme: AppTheme) => ({
  image: {
    filter: (loading: boolean) => (loading ? "blur(10px)" : ""),
    transition: "0.5s filter ease-in",
    clipPath: "border-box inset(0)"
  }
}));

function BetterImage(props: ImageProps) {
  // set up state
  const [state, setState] = useState({
    currentImage: props.overlaySrc || placeholder,
    loading: true
  });
  const classes = useStyles(state.loading);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setState({ currentImage: props.src, loading: false });
    };
    image.src = props.src;
  }, [props.src]);

  const { overlaySrc, alt, ...otherProps } = props;
  return (
    <img
      {...otherProps}
      src={state.currentImage}
      className={classes.image + " " + otherProps.className}
      alt={alt}
    />
  );
}

export default BetterImage;
