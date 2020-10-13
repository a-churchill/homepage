import './fonts/fonts.css';

import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Section } from 'react-smart-sections';

import { globalTheme, shadowColor } from './common/theming';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';
import Hero from './components/Hero';
import Photos from './components/Photos';
import SectionHeader from './components/SectionHeader';
import Sidebar from './components/Sidebar';
import Timeline from './components/Timeline';
import Updates from './components/Updates';
import { AppTheme } from './types/styles';

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
    boxShadow: `${shadowColor(1)} 0px 0px 1px 0px`,
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
            imageName="la-jolla.jpg"
            height={100}
            horizontalWeight={20}
            text=""
          />
          <SectionHeader
            contentFile="about.json"
            reverse={false}
            mobile={false}
          />
        </Section>
        <Section name="Places">
          <Timeline contentFile="places.json" mobile={false} />
        </Section>
        <Section name="Photos">
          <Hero
            pxWidth={dimensions.width}
            imageName="louvre-inside.jpg"
            height={50}
            horizontalWeight={50}
            text=""
          />
          <SectionHeader
            contentFile="photos.json"
            reverse={false}
            mobile={false}
          />
          <Photos />
        </Section>
        <Section name="Updates">
          <Hero
            pxWidth={dimensions.width}
            imageName="golden-gate.jpg"
            height={35}
            horizontalWeight={50}
            text="Updates"
            box={true}
          />
          <Updates contentFile={"updates.json"} mobile={false} />
        </Section>
      </div>
    </div>
  ) : (
    // mobile layout
    <div className={classes.mainContent}>
      <HeaderBar />
      <Section name="About">
        <Hero
          mobile
          pxWidth={dimensions.width}
          imageName={"embarcadero.jpg"}
          height={50}
          text="Andrew Churchill"
          horizontalWeight={50}
          box={true}
        />
        <SectionHeader contentFile="about.json" reverse={false} mobile={true} />
      </Section>

      <Section name="Places">
        <Timeline contentFile="places.json" mobile={true} />
      </Section>

      <Section name="Photos">
        <Hero
          mobile
          pxWidth={dimensions.width}
          imageName="louvre-inside.jpg"
          height={50}
          horizontalWeight={50}
          text=""
        />
        <SectionHeader
          contentFile="photos.json"
          reverse={false}
          mobile={true}
        />
        <Photos />
      </Section>

      <Section name="Updates">
        <Hero
          mobile
          pxWidth={dimensions.width}
          imageName="golden-gate.jpg"
          height={35}
          horizontalWeight={50}
          text="Updates"
          box={true}
        />
        <Updates contentFile={"updates.json"} mobile={true} />
      </Section>

      <div style={{ height: 100 }}></div>
      <Footer standalone={true} />
    </div>
  );
}

export default App;
