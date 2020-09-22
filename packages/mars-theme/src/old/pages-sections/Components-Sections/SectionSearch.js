
import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';


import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from "../../components/CustomButtons/Button.js";

import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#f2f2f2",
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: 0,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {

            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        /* width: "60%",
        float: "left",
        backgroundColor: "#f2f2f2", */

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (<GridContainer justify="center">
        <GridItem lg={8} md={2} xs={6} sm={8} style={{ paddingRight: 0 }}>
            <div className={classes.search}>

                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputrops={{ 'aria-label': 'search' }}
                />

            </div>
        </GridItem>
        <GridItem lg={3} md={2} xs={1} sm={4} style={{ padding: 0 }}>
            <Button color="slack" justIcon >
                <SearchIcon className={classes.searchIcon} />
            </Button>
        </GridItem>
    </GridContainer>
    );
}