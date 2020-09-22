import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
    const classes = useStyles();
    //const { ...rest } = props
    let title = ""
    let description = ""
    console.log(props.header);

    switch (props.header) {
        case 'blog':
            title = "Blogs"
            description = "Use dictionary and imrove your english language, Read funny jokes, quotes. Have access to dozens of images"
            break
        default:
            break
    }

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>{title}</h2>
                <h5 className={classes.description}>
                    {description}
                </h5>
            </GridItem>
        </GridContainer>
    );
}
