/*eslint-disable*/
import React from "react";
import {
  withRouter
} from "react-router-dom";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "../link"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import classNames from 'classnames';
// @material-ui/icons
import CloudDownload from "@material-ui/icons/CloudDownload";
import Language from "@material-ui/icons/Language";
import Mood from "@material-ui/icons/Mood";
import FormatQuote from "@material-ui/icons/FormatQuote";
import Subject from "@material-ui/icons/Subject";
import Home from "@material-ui/icons/Home";
import { connect, styled } from "frontity";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
//import { categories } from '../../config/categories'
const useStyles = makeStyles(styles);
const HeaderLinks = ({ state }) => {
  const classes = useStyles();
  const redirect = (path) => {
    props.history.push(path);

  }
  /* const iconList = {
    dictionary: <Language className={classes.icons} />,
    funny_jokes: <Mood className={classes.icons} />,
    quotes: <FormatQuote className={classes.icons} />,
  } */

  return (
    <List className={classes.list}>


      {state.theme.blog_menu.map(([name, link]) => {
        // Check if the link matched the current page url
        const isCurrentPage = state.router.link === link;
        return (
          <ListItem key={name} className={classes.listItem}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} className={classes.navLink} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </ListItem>
        );
      })}



      <ListItem className={classes.listItem} onClick={() => redirect("/contactus")}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          {/* <CloudDownload className={classes.icons} /> */} Contact Us
        </Button>
      </ListItem>
      <ListItem className={classNames({ [classes.listItem]: true, [classes.loginItem]: true })}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="white"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fas fa-sign-in-alt"} /> Login
        </Button>
      </ListItem>
      {/*<ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}

    </List>
  );
}

export default connect(HeaderLinks)