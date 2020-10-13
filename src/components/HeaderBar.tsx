import React, { useCallback, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { SectionsSpy } from 'react-smart-sections';

import { shadowColor } from '../common/theming';
import { AppTheme } from '../types/styles';
import NavLink from './NavLink';
import { sectionFallbacks } from './Sidebar';

const headerHeight = "7.5vh";
const headerHiddenUntil = 300;

const useStyles = createUseStyles((theme: AppTheme) => ({
  container: {
    transform: (display: boolean) =>
      display ? "translateX(0px)" : `translateY(-${headerHeight})`,
    position: "fixed",
    top: -20,
    width: "100%",
    background: theme.colorBackground,
    zIndex: 99,
    height: headerHeight,
    paddingTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `${shadowColor(0.4)} 0px 0px 20px 0`,
    borderRadius: "0px 0px 10px 10px",
    transition: theme.animationExciting,

    "& li": {
      float: "left",
    },
  },
}));

const HeaderBar = () => {
  const [display, setDisplay] = useState(false);

  const scrollHandler = useCallback(() => {
    if (window.scrollY > headerHiddenUntil) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  const classes = useStyles(display);

  return (
    <div className={classes.container}>
      <div>
        <SectionsSpy
          render={(sections: Array<SectionInfo> | undefined) => {
            sections = sections || sectionFallbacks;
            return (
              <nav>
                <ul>
                  {(sections || []).map((section: SectionInfo) => {
                    return (
                      <NavLink
                        name={section.name}
                        key={section.name}
                        active={section.active}
                        scrollTo={section.yScrollPoint}
                      />
                    );
                  })}
                </ul>
              </nav>
            );
          }}
        />
      </div>
    </div>
  );
};

export default HeaderBar;
