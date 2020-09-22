import { title, primaryColor, cardTitle, main, mainRaised, container } from "../../../nextjs-material-kit.js";
import imagesStyle from "../../imagesStyles.js";

const productStyle = (theme) => ({
    categoryListItem: {
        padding: 0
    },
    recentListItem: {
        //color: "blue",
        fontWeight: 300,
        paddingLeft: "10px",
        padding: "0px 15px 0px 0px",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: primaryColor,
            color: "white"
        },
        "& p": {
            fontSize: 10
        }
    },
    gridItem: {
        marginLeft: 15
    },
    stickySection: {
        position: "fixed",
        top: 100
    },
    categoryListBtn: {
        width: "100%"
    },
    categoryListIcon: {
        minWidth: 30
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9

        "@media (min-width: 1200px)": {
            width: "40%",
            height: 70,
            paddingTop: 0,
            float: "left"
        },
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: "10px !important",
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: "bold",
        "@media (min-width: 1200px)": {
            width: "60%",
            padding: "0px !important",
            float: "left",
            "& p": {
                padding: 10
            }
        },
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
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
    space10: {
        height: "10px",
        display: "block"
    },






});

export default productStyle;
