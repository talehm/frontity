import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { getTagsByPost } from "../../actions/blogActions"
import { withRouter } from 'react-router-dom'
//import { connect } from "react-redux"
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/singlePostStyle.js";
import { SocialMedia } from "../../pages-sections/Components-Sections/SectionSocialMedia.js";
import SectionSearch from "../../pages-sections/Components-Sections/SectionSearch.js"
import SectionCategoryList from "../../pages-sections/Components-Sections/SectionCategoryList.js"
import SectionTag from "../../pages-sections/Components-Sections/SectionTag.js"
import SectionSingleArticle from "../../pages-sections/Components-Sections/SectionSingleArticle.js"
import SectionSubCategoryList from "../../pages-sections/Components-Sections/SectionSubCategoryList.js"
import SectionRelatedTopics from "../../pages-sections/Components-Sections/SectionRelatedTopics.js"
import GridItem from "../../components/Grid/GridItem.js"
import GridContainer from "../../components/Grid/GridContainer.js"
import Parallax from "../../components/Parallax/Parallax.js"
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import { connect, styled, decode } from "frontity";
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(styles);

const BlogArticle = ({ state, libraries }) => {
    //const router = useRouter()

    const classes = useStyles();

    const data = state.source.get(state.router.link);
    // Get the data of the post.
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    console.log(post)
    return (
        <div className={classNames(classes.main, classes.mainRaised, classes.mobileMargin)}>
            {/*  {< Parallax large image={"http://www.mylocalwp.com/wp-content/uploads/profile-bg.jpg"}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}> {post.title}</h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>} */}
            <GridContainer style={{ margin: 0, marginTop: 150 }}>
                <Grid item lg={2} md={2} xs={12} sm={8} /* className={classes.stickySection} */ >
                </Grid >

                <Grid item lg={6} md={8} xs={12} sm={8} style={{ margin: 20 }}  >
                    <SectionSingleArticle data={post} />
                </Grid >
                <Grid item lg={2} md={2} xs={12} sm={4} style={{ margin: 20 }}>
                    {/*  <Paper className={classes.singleBlogPaper} > */}

                    <SectionSearch />

                    <div className={classes.space20} />
                    <Divider variant="middle" />
                    <div className={classes.space20} />
                    <SocialMedia />
                    <div className={classes.space20} />
                    <Divider variant="middle" />
                    <div className={classes.space20} />

                    <SectionTag tags={post.tags} />
                    <div className={classes.space20} />
                    <Divider variant="middle" />
                    <div className={classes.space20} />
                    <SectionRelatedTopics relatedPosts={post.relatedPosts} />
                    <div className={classes.space20} />
                    <Divider variant="middle" />
                    <div className={classes.space20} />
                    <SectionSubCategoryList />

                    <div className={classes.space20} />
                    {/* <Divider variant="middle" />
                        <div className={classes.space20} /> */}
                    {/* <SectionCategoryList />
                        <div className={classes.space20} /> */}
                    {/* </Paper> */}
                </Grid>
                <Grid item lg={2} md={2} xs={12} sm={8} /* className={classes.stickySection} */ >
                </Grid >
            </GridContainer>

        </div >
    );
}


export default connect(BlogArticle)