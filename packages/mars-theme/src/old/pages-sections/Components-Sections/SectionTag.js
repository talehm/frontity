import React from "react";
// plugin that creates slider
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Badge from "../../components/Badge/Badge.js";

import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");
    const [checkedA, setCheckedA] = React.useState(true);
    const [checkedB, setCheckedB] = React.useState(false);

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

            <div className={classes.space20} />


            <GridContainer>

                <GridItem xs={12} sm={12} md={12} lg={12}   >
                    <div className={classes.title}>
                        <h3>Tags</h3>
                    </div>
                    <Badge>default</Badge>
                    <Badge color="primary">primary</Badge>
                    <Badge color="info">info</Badge>
                    <Badge color="success">success</Badge>
                    <Badge color="warning">warning</Badge>
                    <Badge color="danger">danger</Badge>
                    <Badge color="rose">rose</Badge>
                    <Badge>default</Badge>
                    <Badge color="primary">primary</Badge>
                    <Badge color="info">info</Badge>
                    <Badge color="success">success</Badge>
                    <Badge color="warning">warning</Badge>
                    <Badge color="danger">danger</Badge>
                    <Badge color="rose">rose</Badge>
                    <Badge>default</Badge>
                    <Badge color="primary">primary</Badge>
                    <Badge color="info">info</Badge>
                    <Badge color="success">success</Badge>
                    <Badge color="warning">warning</Badge>
                    <Badge color="danger">danger</Badge>
                    <Badge color="rose">rose</Badge>
                    <Badge>default</Badge>
                    <Badge color="primary">primary</Badge>
                    <Badge color="info">info</Badge>
                    <Badge color="success">success</Badge>
                    <Badge color="warning">warning</Badge>
                    <Badge color="danger">danger</Badge>
                    <Badge color="rose">rose</Badge>
                </GridItem>
            </GridContainer>
            <div className={classes.space20} />
        </div>
    );
}
