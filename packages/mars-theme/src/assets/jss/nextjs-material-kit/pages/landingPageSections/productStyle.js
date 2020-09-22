import { title, primaryColor, lemonyellowColor, lemondarkColor, slackColor } from "../../../nextjs-material-kit.js";

const productStyle = {
  categoryGrid: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "20px 20px 30px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 575px)": {
      marginLeft: "10px",
      marginRight: "10px",
      marginBottom: 30,
      "& h4": {
        fontSize: 14,
        margin: "0px 0px 10px 0px"
      }
    },
    "@media (min-width: 1200px)": {
      "&:hover ,&:focus": {
        background: slackColor,
        cursor: "pointer"

      },
      "&:hover h4,&:focus h4": {

        color: "white"
      },
      "&:hover p, &:focus p, ": {

        color: "white"
      },

    },


  },
  section: {
    padding: "70px 0",
    textAlign: "center",
    "@media (min-width: 360px)": {
      padding: "20px 0",
    },
    "@media (min-width: 576px)": {
      padding: "20px 0",
    },
    "@media (min-width: 768px)": {
      padding: "70px 0",
    },
    "@media (min-width: 992px)": {
      padding: "70px 0",
    },
    "@media (min-width: 1200px)": {
      padding: "70px 0",
    },
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    "@media (min-width: 360px)": {
      marginTop: "10px",
    },
    color: slackColor
  },
  description: {
    color: slackColor,
    fontSize: 20,
    "@media (max-width: 575px)": {
      fontSize: 12,
    },
  },
  categoryBtn: {
    margin: 0,
    width: "100%",
    "&:hover": {
      backgroundColor: "white !important",
      color: slackColor
    }
  },
  btnContainer: {
    position: "absolute",
    width: "100%",
    "@media (max-width: 575px)": {
      bottom: "inherit",
    },

  }
};

export default productStyle;
