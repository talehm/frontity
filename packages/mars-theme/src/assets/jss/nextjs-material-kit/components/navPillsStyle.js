import {
  hexToRGBAlpha,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  lemondarkColor,
  lemonyellowColor,
  slackColor,
  dangerColor
} from "../../nextjs-material-kit.js";

const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important",
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "15px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "5px 5px",
    border: "1px solid",
    borderColor: primaryColor,
    "@media (max-width: 575px)": {
      padding: "0px 2px",
      borderRadius: 5,
      minHeight: 30,
      "& span": {
      }
    },
    "@media (min-width: 576px)": {
    },
    "@media (min-width: 768px)": {
      padding: "5px 10px",
      borderRadius: 5,
      minHeight: 30,
      "& span": {
      }

    },
    "@media (min-width: 992px)": {
    },
    "@media (min-width: 1200px)": {
      borderRadius: "15px",
      minHeight: 48,
    },
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  contentWrapper: {
    marginTop: "20px"
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        primaryColor,
        0.4
      )}`
    }
  },
  lemondark: {
    "&,&:hover": {
      color: lemonyellowColor,
      backgroundColor: lemondarkColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        lemondarkColor,
        0.4
      )}`
    }
  },
  slack: {
    "&,&:hover": {
      color: "white",
      backgroundColor: slackColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        slackColor,
        0.4
      )}`
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        infoColor,
        0.4
      )}`
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
        successColor,
        0.14
      )}, 0 3px 1px -2px ${hexToRGBAlpha(
        successColor,
        0.2
      )}, 0 1px 5px 0 ${hexToRGBAlpha(successColor, 0.12)}`
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        warningColor,
        0.4
      )}`
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        dangerColor,
        0.4
      )}`
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px ${hexToRGBAlpha(
        roseColor,
        0.4
      )}`
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabWrapper: {
    color: "inherit",
    position: "relative",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    "&,& *": {
      letterSpacing: "normal"
    }
  }
});

export default navPillsStyle;
