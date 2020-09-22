import React from "react";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemText from '@material-ui/core/ListItemText';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import FolderIcon from '@material-ui/icons/Folder';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import { categories } from "../../config/categories"
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";
//import { connect } from "react-redux"
//import { handleBlogCategory } from "../../actions/blogActions"
import { connect, styled, decode } from "frontity";

const useStyles = makeStyles(styles);

const SectionCategoryList = ({ state }) => {
    const classes = useStyles();
    //const { categories, active_category, handleBlogCategory } = props

    return (
        <div className={classes.container}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.gridItem} >
                    <div className={classes.title}>
                        <h2 style={{ fontSize: 17 }}> Categories</h2>
                    </div>
                    <List className={classes.recentTopicList} component="nav" aria-label="main mailbox folders">
                        <ListItem button >
                            <ListItemIcon className={classes.categoryListIcon}>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={"All"} />
                        </ListItem>
                        {/* {categories.map((category, i) => <ListItem button key={i} onClick={() => handleBlogCategory((category.id, i + 1))}>
                            <ListItemIcon className={classes.categoryListIcon}>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={category.name} />
                        </ListItem>)} */}
                    </List>
                </GridItem>
            </GridContainer>
            <div className={classes.space20} />
        </div>
    );
}


export default connect(SectionCategoryList)