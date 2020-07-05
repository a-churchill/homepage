import React, { useEffect, useState } from "react";
import "./fonts/fonts.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { AppTheme } from "./types/styles";
import { createUseStyles } from "react-jss";
import Footer from "./components/Footer";
import { Section } from "react-smart-sections";
import Timeline from "./components/Timeline";
import { globalTheme, shadowColor } from "./common/theming";

const sidebarWidth = "min(30%, 400px)";

const useStyles = createUseStyles((theme: AppTheme) => ({
  ...globalTheme(theme),
  mainContent: {
    position: "absolute",
    width: (showSidebar: boolean) =>
      showSidebar ? `calc(100% - ${sidebarWidth})` : "100%",
    float: "right",
    right: 0,
    top: 0,
    boxShadow: `${shadowColor(1)} 0px 0px 10px 0px`,
    zIndex: 1,
  },
}));

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    // cleanup, called
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const showSidebar = dimensions.width >= 920;

  const classes = useStyles(showSidebar);

  return dimensions.width >= 920 ? (
    <div>
      <Sidebar width={sidebarWidth} />
      <div className={classes.mainContent}>
        <Section name="About">
          <Hero
            pxWidth={dimensions.width}
            imageName={"embarcadero.jpg"}
            height={100}
            horizontalWeight={70}
          />
        </Section>
        <Section name="Places">
          <div>
            <Timeline contentFile="places.json" mobile={false} />
          </div>
        </Section>
        <Section name="Projects">
          <Hero
            pxWidth={dimensions.width}
            imageName={"light-string.jpg"}
            height={50}
            horizontalWeight={0}
          />
        </Section>
        <Section name="Photos">
          <div style={{ height: 950 }}></div>
        </Section>
      </div>
    </div>
  ) : (
      // mobile layout
      <div className={classes.mainContent}>
        <Hero
          pxWidth={dimensions.width}
          imageName={"embarcadero.jpg"}
          height={100}
        />
        <Timeline contentFile="places.json" mobile={true} />
        <Hero
          pxWidth={dimensions.width}
          imageName={"light-string.jpg"}
          height={50}
        />
        <div>
          <Footer standalone={true} />
        </div>
      </div>
    );
}

export default App;
