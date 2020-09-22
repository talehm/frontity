import { container, grayColor, searchForm } from "../../nextjs-material-kit.js";
const componentsStyle = theme => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    "@media (max-width: 576px)": {
      display: "none",
    },
  },
  selectCategory: {
    backgroundColor: "white",
    height: "unset",
    padding: "8px 24px 2px 10px",
    "& .MuiInput-underline::after, .MuiInput-underline::before": {
      left: "unset",
      right: "unset",
      bottom: "unset",
      content: "none"
    }
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "100%",
    margin: "10px 0 0",
    "@media (min-width: 360px)": {
      fontSize: 16,
    },
  },

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },

  searchIcon: {
    width: "20px !important",
    height: "20px !important",
    color: "inherit",
  },
  searchBtn: { marginTop: 10 },

  formControl: {

    [theme.breakpoints.down("md")]: {
      margin: "10px 0 0 0px !important",
      color: grayColor
    },
    margin: "10px 0 0 0 !important",
    paddingTop: "0",
  },
  searchForm,
  inputRootCustomClasses: {
    margin: "0!important"
  },


  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  mainNotFound: {
    height: "50vh",
    textAlign: "center",
    lineHeight: "50vh",
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
});

export default componentsStyle;
