import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/singlePostStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
const SectionSearch = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSearch.js"))
const SectionSubCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSubCategoryList.js"))
const SectionCategoryList = React.lazy(() => import("../../pages-sections/Components-Sections/SectionCategoryList.js"))
const SectionRelatedTopics = React.lazy(() => import("../../pages-sections/Components-Sections/SectionRelatedTopics.js"))
const SectionSingleJoke = React.lazy(() => import("../../pages-sections/Components-Sections/SectionSingleJoke.js"))

const Parallax = React.lazy(() => import("../../components/Parallax/Parallax.js"))
const GridItem = React.lazy(() => import("../../components/Grid/GridItem.js"))
const GridContainer = React.lazy(() => import("../../components/Grid/GridContainer.js"))

const Paper = React.lazy(() => import('@material-ui/core/Paper'))
const Divider = React.lazy(() => import('@material-ui/core/Divider'))
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
    //const router = useRouter()

    const classes = useStyles();
    const { location, match } = props;
    const url = match.params.name
    const [topClass, setTopClass] = React.useState(false);
    const [OffsetY, setYOffset] = React.useState(false);



    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    /* React.useEffect(() => {
        window.addEventListener("scroll", headerPositionChange);

        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerPositionChange);
            }
        };
    }); */
    /* const headerPositionChange = () => {

        const windowsScrollTop = window.pageYOffset;
        var position = false
        console.log(windowsScrollTop);

        if (windowsScrollTop < 380) {
            position = false
            setTopClass(false)
            setYOffset(windowsScrollTop)

        } else {
            position = true
            setTopClass(true)
        }
        return position
    } */
    return (
        <div className={classNames(classes.main, classes.mainRaised, classes.mobileMargin)}>
            {<Parallax large image={require("../../assets/img/profile-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Hopeless Pupil</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>}
            <GridContainer style={{ margin: 0 }}>
                <GridItem lg={2} md={2} xs={12} sm={8} /* className={classes.stickySection} */ >

                </GridItem>
                <GridItem lg={6} md={8} xs={12} sm={8} /* style={{ marginLeft: 100 / 12 * 2 + "%" }} */ >
                    <SectionSingleJoke />
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


