import React, { useState, useEffect } from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Router, Route, Switch, withRouter, Redirect, useHistory } from 'react-router-dom'


// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";
import NavPills from "../../components/NavPills/NavPills.js";
import { connect } from "react-redux"
import { getBlogs } from "../../actions/blogActions"
import Button from "../../components/CustomButtons/Button.js";


import team1 from "../../assets/img/faces/avatar.jpg";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import classNames from "classnames";
import Loader from 'react-loader-spinner'
const useStyles = makeStyles(styles);

function ProductSection(props) {
  const { getBlogs, blogs } = props
  const classes = useStyles();
  const [blogLoading, setBlogLoading] = React.useState(true);

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgBlog
  );
  const single_blog = <Card plain>
    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
      <img src={team1} alt="..." className={imageClasses} />

    </GridItem>
    <h3 className={classes.cardTitle}>
      What to do during quarantine: 15 useful tips
    <br />
      <small className={classes.smallTitle}>Coronavirus</small>
    </h3>
    <CardBody className={classes.cardBody}>
      <p className={classes.description}>
        You can write here details about one of your team members. You
        can give more details about what they do. Feel free to add
some <a href="#pablo">links</a> for people to be able to
follow them outside the site.
</p>
    </CardBody>

  </Card>
  const handleResponse = () => {
    setBlogLoading(false)
  }
  const handleError = () => {
    setBlogLoading("error")
  }
  const openArticle = (slug) => {
    props.history.push("/blog/" + slug)
  }
  //console.log(props.blogs);
  React.useEffect(() => {
    console.log(blogs.length);

    if (blogs.length === 0) {
      getBlogs(handleResponse, handleError)
    }
  }, [blogs.length, getBlogs]);
  if (blogLoading && blogs.length === 0) {
    return (
      <GridContainer justify="center">
        <GridItem lg={1}>
          <Loader
            className={classes.innerLoader}
            type="Bars"
            color="#9c27b0"
            height={30}
            width={30}
            timeout={15000} //3 secs
          />
        </GridItem>
      </GridContainer>
    )
  } else {
    return (
      <div className={classes.section}>

        <div>
          <GridContainer justify="center" className={classes.blogNavPills}>
            <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="slack"

                tabs={[
                  {
                    tabButton: "Coronavirus",
                    /* tabIcon: Camera, */
                    tabContent: (
                      <GridContainer justify="center" className={classes.blogContainer}>
                        {blogs.map(blog => <GridItem xs={12} sm={6} md={4} lg={4} className={classes.blogItem} onClick={() => openArticle(blog.slug)}>
                          <Card plain>
                            <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                              <img src={team1} alt="..." className={imageClasses} />

                            </GridItem>
                            <h3 className={classes.cardTitle}>
                              {blog.title.rendered}
                              <br />
                              <small className={classes.smallTitle}>Coronavirus</small>
                            </h3>
                            <CardBody className={classes.cardBody}>
                              <p className={classes.description}>
                                {blog.excerpt.rendered}
                              </p>
                            </CardBody>

                          </Card>
                        </GridItem>)}


                        <GridItem xs={12} sm={12} md={12} >
                          <Button>See More</Button>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Digital Markting",
                    /* tabIcon: Palette, */
                    tabContent: (
                      <GridContainer justify="center" className={classes.blogContainer}>
                        <GridItem xs={12} sm={6} md={3} lg={4} className={classes.blogItem}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3} lg={4} className={classes.blogItem}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3} lg={4} className={classes.blogItem}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3} lg={4} className={classes.blogItem}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button>See More</Button>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Technology",
                    /* tabIcon: Favorite, */
                    tabContent: (
                      <GridContainer justify="center" className={classes.blogContainer}>
                        <GridItem xs={12} sm={6} md={3}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={6} md={3}>
                          {single_blog}
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button>See More</Button>
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>

          </GridContainer>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blog.blogs
})
export default withRouter(connect(mapStateToProps, { getBlogs })(ProductSection))