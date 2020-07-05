import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { AppTheme } from "../types/styles";
import { TimelineProps, CardProps } from "../types/props"
import Card, { cardMargin, cardWidth } from "./Card";

// major credit to https://sudo.isl.co/translate-vertical-horizontal/#The-Effect-Explained
// for inspiration on the horizontal scroll effect!

type styleProps = {
  translateX: number;
  dynamicHeight: number;
}

const useStyles = createUseStyles((theme: AppTheme) => ({
  outerContainer: {
    height: (props: styleProps) => props.dynamicHeight + cardMargin,
    position: "relative",
    width: "100%",
  },
  stickyContainer: {
    height: "100vh",
    position: "sticky",
    top: 0,
    width: "100%",
    overflowX: "hidden",
  },
  horizontalTranslateContainer: {
    position: "absolute",
    height: "100%",
    willChange: "transform",
    transform: (props: styleProps) => `translateX(${props.translateX}px)`,
  },
  flexContainer: {
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));

// helper functions for setting horizontal scroll state

// calculates correct height of the tall container
const calcDynamicHeight = (hcWidth: number, viewWidth: number): number => {
  const vh = window.innerHeight;
  return hcWidth + vh - viewWidth + (viewWidth - 2.5 * cardMargin - cardWidth);
};

// updates height of tall container at beginning and on resize
const handleDynamicHeight = (objectRef: React.MutableRefObject<null>, containerRef: React.MutableRefObject<null>, setDynamicHeight: React.Dispatch<React.SetStateAction<number>>
) => {
  const horizontalContainer = objectRef.current || { scrollWidth: 0 }
  const hcWidth = horizontalContainer.scrollWidth;
  const stickyContainer = containerRef.current || { clientWidth: 0 }
  const viewWidth = stickyContainer.clientWidth;
  const dynamicHeight = calcDynamicHeight(hcWidth, viewWidth);
  setDynamicHeight(dynamicHeight);
};

// applies listener to translate horizontal scroll component
const applyScrollListener = (ref: React.MutableRefObject<null>, setTranslateX: React.Dispatch<React.SetStateAction<number>>) => {
  window.addEventListener("scroll", () => {
    const current = ref.current || { offsetTop: 0 }
    const offsetTop = -current.offsetTop;
    setTranslateX(offsetTop);
  });
};

function Timeline(props: TimelineProps) {
  // height of outer tall container
  const [dynamicHeight, setDynamicHeight] = useState(0);

  // translation of inner horizontal-translating container
  const [translateX, setTranslateX] = useState(0);

  // applies CSS styles based on above state
  const classes = useStyles({ translateX, dynamicHeight });

  // for getting offset from top, and view width
  const stickyRef = useRef(null);

  // for getting scroll width
  const hcRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(hcRef, stickyRef, setDynamicHeight);
  };

  // runs once on Timeline mount
  useEffect(() => {
    // sets tall container to correct height
    handleDynamicHeight(hcRef, stickyRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(stickyRef, setTranslateX);
  }, []);


  const cards = require(`../content/${props.contentFile}`) as [CardProps]
  return !props.mobile ? (
    // desktop layout
    <div className={classes.outerContainer}>
      <div className={classes.stickyContainer} ref={stickyRef}>
        <div className={classes.horizontalTranslateContainer} ref={hcRef}>
          <div className={classes.flexContainer}>
            {cards.map((card: CardProps, index: number) => {
              const marginBonus = 0.1 * (cardWidth)
              const currentActive = Math.floor(((-translateX + cardWidth / 2) - marginBonus) / (cardWidth + cardMargin + marginBonus))
              console.log(`${translateX}, ${currentActive} (bonus: ${marginBonus})`)
              return (
                <Card key={card.title} active={index === currentActive} {...card} />)
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
      // mobile layout
      <div className={classes.mobileContainer}>
        {cards.map((card: CardProps) => { return Card(card) })}
      </div >
    );
}

export default Timeline;
