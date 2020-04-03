import React, { useEffect, useState } from "react";
import "./fonts/fonts.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { AppTheme } from "./types/styles";
import { createUseStyles } from "react-jss";
import Footer from "./components/Footer";
import { Section } from "react-smart-sections";
import Timeline from "./components/Timeline";

const sidebarWidth = "min(30%, 400px)";

const useStyles = createUseStyles((theme: AppTheme) => ({
  "@global": {
    body: {
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"],
      backgroundColor: theme.colorBackground,
      color: theme.colorText,
      textAlign: "center"
    },
    "h1 h2": {
      fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"]
    },
    "h3 h4 h5 h6": {
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"]
    },
    a: {
      textDecoration: "none"
    },
    ul: {
      margin: 0,
      padding: 5
    },
    li: {
      listStyle: "none"
    },
    button: {
      border: "none",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"]
    }
  },
  mainContent: {
    position: "absolute",
    width: (showSidebar: boolean) =>
      showSidebar ? `calc(100% - ${sidebarWidth})` : "100%",
    float: "right",
    right: 0,
    top: 0,
    boxShadow: "rgb(58, 65, 75) 0px 0px 10px 0px",
    zIndex: 1
  },
  standaloneFooter: {
    height: 110
  },
  // debug
  image: {
    width: "100%",
    clipPath: "inset(0px round 50%)",
    boxShadow: `0px 0px 10px 0 ${theme.colorSecondary}`
  },
  imageContainer: {
    width: "min(40%, 130px)",
    marginTop: 30
  },
  otherContainer: {
    width: "500px"
  }
}));

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
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
            <Timeline />
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
    <div className={classes.mainContent}>
      <Hero
        pxWidth={dimensions.width}
        imageName={"embarcadero.jpg"}
        height={100}
      />
      <Hero
        pxWidth={dimensions.width}
        imageName={"light-string.jpg"}
        height={50}
      />
      <div className={classes.standaloneFooter}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
