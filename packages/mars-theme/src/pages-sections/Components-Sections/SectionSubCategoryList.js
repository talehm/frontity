import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

import ListItemText from '@material-ui/core/ListItemText';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import FolderIcon from '@material-ui/icons/ViewModule';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { connect, styled, decode } from "frontity";
import Paper from '@material-ui/core/Paper'

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";

const useStyles = makeStyles(styles);

const SectionBasics = ({ state, actions }) => {
    const classes = useStyles();
    const { categories, activeCategory } = state.theme
    const { getCategories, setActiveCategory } = actions.theme

    //const [checked, setChecked] = React.useState([24, 22]);
    //const [selectedEnabled, setSelectedEnabled] = React.useState("b");
    //const [checkedA, setCheckedA] = React.useState(true);
    //const [checkedB, setCheckedB] = React.useState(false);
    //const [secondary, setSecondary] = React.useState(true);
    /* const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }; */
    React.useEffect(() => {
        new Promise((resolve, reject) => {
            resolve(getCategories())
        }).then(setActiveCategory())

    }, [state.router.link])
    return (
        <Paper>
            <div className={classes.space20} />
            <div className={classes.container}>
                <GridContainer>

                    <GridItem xs={12} sm={12} md={12} lg={12} className={classes.gridItem} >
                        <div className={classes.title}>
                            <h2 style={{ fontSize: 17 }}>Blog Categories</h2>
                        </div>
                        <List className={classes.recentTopicList} component="nav" aria-label="main mailbox folders">
                            {categories.map((value, i) => <ListItem button>
                                {/* <ListItemIcon className={classes.categoryListIcon}>
                                <FolderIcon />
                            </ListItemIcon> */}
                                <ListItemText primary={value.name} style={{ color: "rgb(30, 115, 190)", fontSize: 16 }} />
                            </ListItem>
                            )}
                        </List>



                        {/* <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink> */}
                    </GridItem>
                </GridContainer>
                <div className={classes.space20} />
            </div>
            <div className={classes.space20} />
        </Paper>
    );
}

export default connect(SectionBasics)