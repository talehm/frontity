import { title, primaryColor, cardTitle, main, mainRaised, container, slackColor, slackYellowColor } from "../../../nextjs-material-kit.js";
import imagesStyle from "../../imagesStyles.js";

const productStyle = {
  main,
  mainRaised,
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
  blogItem: { maxWidth: 400 },
  section: {
    padding: "0px 0",
    textAlign: "center",
    "@media (min-width: 360px)": {
      padding: "20px 0",
    },

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
    textAlign: "center"

  },
  cardTitle,
  cardBody: { padding: "0px 15px", textAlign: "left" },
  blogContainer: {
    padding: "0px 0px",

  },
  description: {
    color: "#999",
    fontSize: 20
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

  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,


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
    textAlign: "center"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  selectJokes: {
    "& >div>div": {
      fontSize: "1.5rem"
    }
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
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
  emoji: {
    color: "#FFCC33",
    paddingLeft: 10
  },
  emojiLarge: {
    fontSize: 30,
    textAlign: "center"
  },
  jokePaper: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    //textAlign: "center"
  },
  jokeOdd: {
    backgroundColor: "#4A154B",
    color: "white",
    fontWeight: "bold"
  },
  jokeEven: {
    color: "#4A154B",
    fontWeight: "bold"
  },
  jokeList: {
    paddingLeft: 15,
    fontWeight: 500,
    fontSize: "1.3rem"
  },
  jokeCard: {
    margin: 10,
    "&:hover": {
      backgroundColor: slackColor,
      color: slackYellowColor
    }
  }
};

export default productStyle;
