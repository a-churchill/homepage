import React from "react";
import NavLink from "./NavLink";
import me from "../imgs/andrew-churchill.jpg";
import { createUseStyles } from "react-jss";
import { SidebarProps } from "../types/props";
import { AppTheme } from "../types/styles";
import Footer from "./Footer";
import { SectionsSpy } from "react-smart-sections";

const sectionFallbacks = [
  { name: "About", active: true, yScrollPoint: 0 },
  { name: "Places", active: false, yScrollPoint: 0 },
  { name: "Projects", active: false, yScrollPoint: 0 },
  { name: "Photos", active: false, yScrollPoint: 0 }
];

const useStyles = createUseStyles((theme: AppTheme) => ({
  sidebar: {
    // global for sidebar
    float: "left",
    width: (props: SidebarProps) => props.width,
    position: "fixed",
    overflowY: "hidden",
    background: "rgba(0, 0, 0, 0.04)",
    left: 0,
    bottom: 0,
    top: 0
  },
  image: {
    width: "min(40%, 130px)",
    height: "auto",
    borderRadius: "50%",
    boxShadow: `0px 0px 10px 0 ${theme.colorSecondary}`,
    marginTop: 30
  },
  name: {
    fontFamily: ["concourse_c2_tabregular", "Helvetica", "sans-serif"],
    padding: 10,
    fontSize: 50,
    margin: 0
  },
  footer: {
    position: "absolute",
    bottom: 40,
    right: "1.5em",
    left: "1.5em",
    padding: "0 20px"
  }
}));

function Sidebar(props: SidebarProps) {
  const classes = useStyles(props);
  return (
    <div className={classes.sidebar}>
      <aside>
        <img className={classes.image} src={me} alt="me" />
        <h1 className={classes.name}>
          Andrew
          <br />
          Churchill
        </h1>
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
        <Footer />
      </aside>
    </div>
  );
}

export default Sidebar;
