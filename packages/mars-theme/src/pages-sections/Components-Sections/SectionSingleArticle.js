import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { Router, Route, Switch, withRouter, Redirect, useHistory } from 'react-router-dom'
import { connect, styled, decode } from "frontity";

import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from '@material-ui/core/Paper';
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/singlePostStyle.js";
import { ShareOnSocialMedia } from "./SectionSocialMedia.js";
const useStyles = makeStyles(styles);

const SocailMedia = ({ state, libraries, data }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([24, 22]);
    const Html2React = libraries.html2react.Component;

    /* const [selectedEnabled, setSelectedEnabled] = React.useState("b");
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
    }; */
    return (
        <div >
            <Paper elevation={3} className={classes.articlePaper}>
                <div class="section-heading">
                    {<h1 style={{ fontSize: 40, fontFamily: "Helvetica" }}>{data.title}</h1>}
                    <ShareOnSocialMedia />
                    <Html2React html={data.content} />
                </div>
                <ShareOnSocialMedia />
            </Paper>
        </div>
    );
}
export default connect(SocailMedia)
