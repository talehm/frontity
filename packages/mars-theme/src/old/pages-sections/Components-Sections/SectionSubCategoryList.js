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
import FolderIcon from '@material-ui/icons/Folder';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (
        <div className={classes.container}>
            <GridContainer>

                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.gridItem} >
                    <div className={classes.title}>
                        <h3>Blog Categories</h3>
                    </div>
                    <List className={classes.recentTopicList} component="nav" aria-label="main mailbox folders">
                        {[1, 2, 3, 4, 5].map((index) => <ListItem button>
                            <ListItemIcon className={classes.categoryListIcon}>
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts (5)" />
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
    );
}
