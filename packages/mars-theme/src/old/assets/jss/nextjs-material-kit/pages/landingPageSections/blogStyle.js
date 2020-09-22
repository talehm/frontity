import { title, primaryColor, loader, innerLoader, cardTitle, main, mainRaised, container, lemondarkColor, lemonyellowColor } from "../../../nextjs-material-kit.js";
import imagesStyle from "../../imagesStyles.js";

const productStyle = {
  main,
  mainRaised,
  innerLoader,
  recentTopicList: {
    color: "blue"
  },
  categoryGrid: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "20px 20px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",

    "@media (max-width: 575px)": {
      marginLeft: "10px",
      marginRight: "10px",
      "& h4": {
        fontSize: 14,
        margin: "0px 0px 10px 0px"
      }
    },
    "@media (min-width: 1200px)": {
      "&:hover ,&:focus": {
        background: primaryColor,
        margin: "10px 25px 0px"
      },
      "&:hover h4,&:focus h4": {
        fontSize: 20,
        color: "white"
      },
      "&:hover p, &:focus p, ": {
        fontSize: 18,
        color: "white"
      }
    },


  },
  /* blogItem: {
    maxWidth: 400,
    "@media (max-width: 768px)": {
      maxWidth: 300,
    }
  }, */
  section: {
    padding: "0px 0",
    textAlign: "center",


  },
  title: {
    //fontSize: "4.2rem",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontWeight: "600",
    width: "100%",
    textAlign: "center",


  },
  cardTitle,
  loader,
  cardBody: { padding: "0px 15px", textAlign: "left" },
  blogContainer: {

    "@media (max-width: 575px)": {
      padding: 0,
    },
    "@media (min-width: 576px)": {
      padding: "0px 50px",
    },
    "@media (min-width: 768px)": {
      padding: "0px 100px",
    },
    "@media (min-width: 992px)": {
      padding: "0px 100px",
    },
    "@media (min-width: 1200px)": {
      padding: "0px 200px",
    },

  },
  description: {
    color: lemondarkColor,
    fontSize: 20,
  },
  imgBlog: {
    width: "100%",
    borderRadius: "6px !important"
  },
  blogNavPills: {
    "& .react-swipeable-view-container>div": {
      overflow: "hidden !important"
    }
  },
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "0",
    maxWidth: "100%",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main,
  mainRaised,

  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
    "@media (max-width: 575px)": {
      margin: "0px auto 50px auto",
    }


  },
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  space20: {
    height: "20px",
    display: "block"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
};

export default productStyle;
