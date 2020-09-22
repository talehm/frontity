import React from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  withRouter
} from "react-router-dom";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Button from "../../components/CustomButtons/Button.js";
import { categories } from "../../config/categories"
const useStyles = makeStyles(styles);

function SectionCategory(props) {
  const classes = useStyles();
  const iconList = {
    funny_jokes: VerifiedUser,
    dictionary: Chat,
    quotes: Fingerprint,
  }
  const redirect = (link) => {
    console.log("sdfsd");

    props.history.push(link);
  }
  const random = (name) => {
    console.log(name);

  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Categories</h2>
          <h5 className={classes.description}>
            Use dictionary and imrove your english language, Read funny jokes, quotes. Have access to dozens of images
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          {categories.map(category =>
            category.active ?
              <GridItem xs={5} sm={4} md={3} className={classes.categoryGrid}>
                <InfoArea
                  title={category.title}
                  description={category.description}
                  icon={iconList[category.name]}
                  iconColor={category.iconColor}
                  onClick={() => redirect(category.link)}
                  vertical
                />
                <GridContainer className={classes.btnContainer}>
                  <GridItem xs={12} style={{ padding: 0 }}>
                    <Button color="lemonyellow" size="sm" className={classes.categoryBtn} onClick={() => random(category.name)} >
                      Random
                  </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
              : null
          )}
        </GridContainer>
      </div>
    </div>
  );
}
export default withRouter(SectionCategory)