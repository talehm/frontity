import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor
} from "../../nextjs-material-kit.js";

const badgeStyle = {
  badge: {
    "& a": { color: "#000", textDecoration: 'none', },
    "&:hover": {
      cursor: "pointer", backgroundColor: "#6c757d",
      "& a": { color: "#fff", }
    },
    margin: "5px 5px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#484d51",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block",
    "@media (max-width: 575px)": {
      fontSize: "10px",
    },
    "@media (min-width: 576px)": {
      fontSize: "8px",
      margin: "2px 2px",
    },
    "@media (min-width: 768px)": {
      fontSize: "10px",
    },
    "@media (min-width: 992px)": {
      fontSize: "10px",
      margin: "2px 2px",

    },
    "@media (min-width: 1200px)": {
      fontSize: "12px",
      margin: "5px 5px",
    },
  },
  primary: {
    backgroundColor: primaryColor
  },
  warning: {
    backgroundColor: warningColor
  },
  danger: {
    backgroundColor: dangerColor
  },
  success: {
    backgroundColor: successColor
  },
  info: {
    backgroundColor: infoColor
  },
  rose: {
    backgroundColor: roseColor
  },
  gray: {
    backgroundColor: "#d6d9db"
  }
};

export default badgeStyle;
