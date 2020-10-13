import { AppTheme } from '../types/styles';

export const appTheme: AppTheme = {
  colorPrimary: "#4395ff",
  colorSecondary: "#193f78",
  colorBackground: "rgb(230, 230, 230)",
  colorHighlight: "rgb(240, 240, 240)",
  colorText: "rgb(0, 0, 0)",
  animationExciting: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  animationSimple: "all 0.3s ease-in-out 0s",
};

export const globalTheme = (theme: AppTheme) => ({
  "@global": {
    body: {
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"],
      backgroundColor: theme.colorBackground,
      color: theme.colorText,
      textAlign: "center",
    },
    "h1 h2": {
      fontFamily: ["concourse_c3_tabregular", "Helvetica", "sans-serif"],
    },
    "h3 h4 h5 h6": {
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"],
    },
    a: {
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 5,
    },
    li: {
      listStyle: "none",
    },
    button: {
      border: "none",
      backgroundColor: "rgba(0, 0, 0, 0)",
      fontFamily: ["concourse_t3_tabregular", "Helvetica", "sans-serif"],
    },
  },
});

export const shadowColor = (opacity: number) => {
  return `rgba(58, 65, 75, ${opacity})`;
};
