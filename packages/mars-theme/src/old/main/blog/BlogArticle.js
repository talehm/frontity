import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

// @material-ui/icons
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/singlePostStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const SectionSearch = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSearch.js"))
const SectionCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionCategoryList.js"))
const SectionTag = React.lazy(() => import("../../pages-sections/Components-Sections/SectionTag.js"))
const SectionSingleArticle = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSingleArticle.js"))
const SectionSubCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSubCategoryList.js"))
const SectionRelatedTopics = React.lazy(() => import("../../pages-sections/Components-Sections/SectionRelatedTopics.js"))


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    //const router = useRouter()

    const classes = useStyles();
    const { location, match } = props;
    const url = match.params.name





    return (
        <div className={classNames(classes.main, classes.mainRaised, classes.mobileMargin)}>
            {<Parallax large image={require("../../assets/img/profile-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Basic protective measures against the new coronavirus</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>}
            <GridContainer style={{ margin: 0 }}>
                <GridItem lg={2} md={2} xs={12} sm={8} /* className={classes.stickySection} */ >
                </GridItem>
                <GridItem lg={6} md={8} xs={12} sm={8} /* style={{ marginLeft: 100 / 12 * 2 + "%" }} */ >
                    <SectionSingleArticle />
                </GridItem>
                <GridItem lg={2} md={2} xs={12} sm={4} >
                    <Paper className={classes.singleBlogPaper} >
                        <div className={classes.space50} />
                        <SectionSearch />
                        <div className={classes.space20} />
                        <Divider variant="middle" />
                        <div className={classes.space20} />
                        <SocialMedia />
                        <div className={classes.space50} />
                        <Divider variant="middle" />
                        <div className={classes.space20} />
                        <SectionTag />
                        <div className={classes.space20} />
                        <Divider variant="middle" />
                        <SectionRelatedTopics />
                        <div className={classes.space20} />
                        <Divider variant="middle" />
                        <SectionSubCategoryList />
                        <div className={classes.space20} />
                        <Divider variant="middle" />
                        <div className={classes.space20} />
                        <SectionCategoryList />
                        <div className={classes.space20} />
                        <Divider />
                    </Paper>
                </GridItem>
                <GridItem lg={2} md={2} xs={12} sm={8} /* className={classes.stickySection} */ >
                </GridItem>
            </GridContainer>

        </div >
    );
}


