import React, { useState, useEffect } from "react"
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Router, Route, Switch, withRouter, Redirect, useHistory } from 'react-router-dom'
import { connect, styled, decode } from "frontity";
// core components
import GridContainer from "../../components/Grid/GridContainer.js"
import GridItem from "../../components/Grid/GridItem.js"
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js"
import NavPills from "../../components/NavPills/NavPills.js"
//import { connect } from "react-redux"
import { getBlogs, getBlogCategories, getTagsByPost, handleBlogCategory } from "../../actions/blogActions"
import Button from "../../components/CustomButtons/Button.js"
import MuButton from "@material-ui/core/Button"
import dateFormat from 'dateformat'
//import team1 from "../../assets/img/faces/bg.jpg"
import Card from "../../components/Card/Card.js"
import CardBody from "../../components/Card/CardBody.js"
import classNames from "classnames"
import Loader from 'react-loader-spinner'
import Grid from "@material-ui/core/Grid"
import SectionBlogCategoriesMenu from "../Components-Sections/SectionBlogCategoriesMenu.js"

const useStyles = makeStyles(styles)

const BlogSection = ({ state, actions, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const classes = useStyles()
  const { navigationPage, per_page, isBlogReady } = state.theme
  const { loadBlog } = actions.theme
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgBlog
  )
  const data = state.router.link === "/" ? state.source.get("/articles") : state.source.get(state.router.link)
  React.useEffect(() => {
    state.router.link === "/" ? actions.source.fetch("/articles") : actions.source.fetch(state.router.link)
  }, [state.router.link])

  return data.isReady ? (
    <div className={classes.section}>
      <div>
        <Grid container justify="center" className={classes.blogNavPills}>
          {data.isBlogByCategory || data.isBlog && state.router.link != "/" ? <SectionBlogCategoriesMenu /> : null}

          < Grid item xs={12} sm={12} md={12} lg={12} className={classes.navWrapper}>
            <Grid container justify="center" style={{ marginLeft: 0 }} spacing={4} >
              {data.items.map(item => {
                const blog = state.source.articles[item.id]
                return (<Grid item xs={12} sm={6} md={4} lg={3} className={classes.blogItem} onClick={() => actions.router.set(blog.link)}>
                  <Card plain className={classes.blogCard}>
                    <Grid container >
                      <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <img src="http://www.mylocalwp.com/wp-content/uploads/bg.jpg" alt="..." className={imageClasses} />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} className={classes.itemGrid}>
                        <h3 className={classes.cardTitle}>
                          {blog.title}
                          <br />
                          {/* <small className={classes.smallTitle}>{blog.category.name}</small> */}
                          <small className={classNames(classes.smallTitle, classes.postDate)} >{dateFormat(blog.post_date, "dd mmm yyyy")}</small>
                          <br />
                        </h3>
                      </Grid>
                    </Grid>
                    <CardBody className={classes.cardBody}>
                      <p className={classes.excerpt}>
                        <Html2React html={blog.excerpt} />
                      </p>
                    </CardBody>
                  </Card>
                </Grid>)
              })}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container justify="center" style={{ marginLeft: 0 }} >
                  {/* <GridItem>
                    {message != null ? <Alert severity="info" style={{ margin: 5 }}> {message}</Alert> : null}
                  </GridItem> */}
                </Grid>

              </Grid >


            </Grid>
          </Grid>

        </Grid>

      </div>
    </div >
  )
    : null
  //}
}

export default connect(BlogSection)