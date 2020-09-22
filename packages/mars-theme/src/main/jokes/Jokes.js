
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/jokeStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
import { logEvent } from '../../utils/analytics'
const JokeSection = React.lazy(() => import("../../pages-sections/LandingPage-Sections/JokeSection.js"))
const SectionSearch = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSearch.js"))
const GridItem = React.lazy(() => import("../../components/Grid/GridItem.js"))
const GridContainer = React.lazy(() => import("../../components/Grid/GridContainer.js"))
const Parallax = React.lazy(() => import("../../components/Parallax/Parallax.js"))
const Paper = React.lazy(() => import('@material-ui/core/Paper'))
const Divider = React.lazy(() => import('@material-ui/core/Divider'))





const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    //const router = useRouter()
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Parallax small image={require("../../assets/img/profile-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Funny Jokes</h1>
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
                        <JokeSection />
                    </GridItem>
                    <GridItem md={2} xs={12} sm={4}>
                        <Paper className={classes.singleBlogPaper} >
                            <div className={classes.space50} />
                            <SectionSearch />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <div className={classes.space20} />
                            <SocialMedia />
                            <div className={classes.space50} />
                        </Paper>
                    </GridItem>
                    <GridItem md={1} xs={12} sm={8}>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
