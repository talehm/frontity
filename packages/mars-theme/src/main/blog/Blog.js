
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
import { fetchTags } from "../../actions/blogActions"
import { withRouter } from 'react-router-dom'
//import { connect } from "react-redux"
import BlogSection from "../../pages-sections/LandingPage-Sections/BlogSection.js"
import SectionSearch from "../../pages-sections/Components-Sections/SectionSearch.js"
import SectionCategoryList from "../../pages-sections/Components-Sections/SectionCategoryList.js"
import SectionTag from "../../pages-sections/Components-Sections/SectionTag.js"
//import SectionRecentTopics from "../../pages-sections/Components-Sections/SectionRecentTopics.js"
//import SectionRelatedTopics from "../../pages-sections/Components-Sections/SectionRelatedTopics.js"
import { connect, styled, decode } from "frontity";
import Pagination from '../../themes/pagination'
import Grid from "@material-ui/core/Grid"

import GridItem from "../../components/Grid/GridItem.js"
import GridContainer from "../../components/Grid/GridContainer.js"
import Parallax from "../../components/Parallax/Parallax.js"
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Link from "../../themes/link";
import MuButton from "@material-ui/core/Button"
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles(styles);
const getTotalPages = (state) => {
    const data = state.source.get(state.router.link)
    return Object.values(state.source.articles)[0].totalPages
}
const Blog = ({ state, actions, libraries }) => {
    //const router = useRouter()
    const { path, page, category, query } = libraries.source.parse(state.router.link);
    const totalPages = getTotalPages(state)
    const { navigationPage, upToDate, tags } = state.theme

    const { getTags, setNavigationPage, showUpToDateMessage } = actions.theme
    const classes = useStyles();
    //const { location, match, ...rest } = props;
    //const tagSlug = match.params.tag
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const loadMore = () => {
        //console.log(path + "/" + navigationPage + 1)
        if (navigationPage > totalPages) {
            showUpToDateMessage()
        }
        actions.source.fetch(path + (navigationPage))
        setNavigationPage()
    }
    React.useEffect(() => {
        getTags()
    }, [])
    const urlType = state.source.get(state.router.link)
    return (
        <div>
            <Parallax small image={"http://www.mylocalwp.com/wp-content/uploads/profile-bg.jpg"}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>{urlType.isBlogByTag ? "#" + urlType.isBlogByTag : 'Blog'}</h1>
                                <h3 className={classes.subtitle}>
                                    All Articles on {urlType.isBlogByTag ? "#" + urlType.isBlogByTag : 'Blog'}
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <GridContainer justify="center" style={{ margin: 0 }}>
                    <GridItem lg={2} md={2} xs={12} sm={8} >
                    </GridItem>
                    <GridItem lg={6} md={6} xs={12} sm={8} style={{ margin: 10 }}>
                        <div className={classes.space20} />
                        <GridContainer justify="center" style={{ margin: 10 }}>
                            <Grid item xs={12} sm={12} md={12}  >
                                <BlogSection />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Grid container justify="center" style={{ marginLeft: 0 }} >
                                    <GridItem>
                                        {upToDate ? <Alert severity="info" style={{ margin: 5 }}> Up to Date</Alert> : null}
                                    </GridItem>
                                </Grid>
                            </Grid >
                            <Grid item style={{ marginBottom: 30 }}  >
                                <Pagination />
                                {/* <GridContainer justify="center">
                                    <Grid item style={{ marginBottom: 30 }} >
                                        {/* <Link link={renderLink()}> */}{/* <MuButton color="primary" onClick={loadMore} variant="contained" >Load More </MuButton>{/* </Link> */}
                                {/* </Grid>
                        </GridContainer>   */}
                            </Grid>
                        </GridContainer>
                    </GridItem>

                    <GridItem lg={2} md={2} xs={12} sm={4}>
                        <Paper className={classes.singleBlogPaper} >
                            <div className={classes.space50} />
                            <SectionSearch />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <div className={classes.space20} />
                            <SocialMedia />
                            <div className={classes.space20} />
                            <Divider variant="middle" />
                            <SectionTag tags={tags} />
                            <div className={classes.space20} />
                            <Divider variant="middle" />

                            {urlType.isBlogByTag ? <SectionCategoryList /> : null}

                            {/* <div className={classes.space20} />
                            <Divider variant="middle" />
                            <div className={classes.space20} />

                            <SectionRelatedTopics />
                            <div className={classes.space20} /> */}
                        </Paper>
                    </GridItem>
                    <GridItem md={1} xs={12} sm={8}>
                    </GridItem>

                </GridContainer>
            </div >
        </div >
    );
}
Blog.defaultProps = {
    title: 'Blog',
}
const mapStateToProps = state => ({
})
//export default withRouter(connect(mapStateToProps, { getTags })(Blog))
export default connect(Blog)