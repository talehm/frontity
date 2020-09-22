
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
//import SectionRelatedTopics from "../../pages-sections/Components-Sections/SectionRelatedTopics.js";

const BlogSection = React.lazy(() => import("../../pages-sections/LandingPage-Sections/BlogSection.js"))
const SectionSearch = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSearch.js"))
const SectionCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionCategoryList.js"))
const SectionTag = React.lazy(() => import("../../pages-sections/Components-Sections/SectionTag.js"))
const SectionRecentTopics = React.lazy(() => import("../../pages-sections/Components-Sections/SectionRecentTopics.js"))
const SectionSubCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSubCategoryList.js"))
const SectionRelatedTopics = React.lazy(() => import("../../pages-sections/Components-Sections/SectionRelatedTopics.js"))


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    //const router = useRouter()

    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div>
            <Parallax small image={require("../../assets/img/profile-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Blog</h1>
                                <h3 className={classes.subtitle}>
                                    Information about Funnydef Jokes
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <GridContainer>
                    <GridItem md={1} xs={12} sm={8}>
                    </GridItem>
                    <GridItem md={8} xs={12} sm={8}>
                        <BlogSection />
                    </GridItem>
                    <GridItem md={2} xs={12} sm={4}>
                        <Paper className={classes.singleBlogPaper} >
                            <div className={classes.space50} />
                            <SectionSearch />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <div className={classes.space20} />
                            <SocialMedia />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <SectionTag />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <div className={classes.space20} />

                            <SectionRelatedTopics />
                            <div className={classes.space20} />
                        </Paper>
                    </GridItem>
                    <GridItem md={1} xs={12} sm={8}>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
