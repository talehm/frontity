import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles(styles);
/* 
const useStyles = makeStyles((theme) => ({


    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: "10px !important",
        fontSize: 14,
        lineHeight: "18px",
        fontWeight: "bold"
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    space20: {
        height: "20px",
        display: "block"
    },
    space50: {
        height: "50px",
        display: "block"
    },
    space70: {
        height: "70px",
        display: "block"
    },
    space10: {
        height: "10px",
        display: "block"
    },

}));
 */
export default function MediaControlCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            {[1, 2, 3, 4, 5].map(index => <div> <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={require("../../assets/img/faces/example.jpg")}
                    title="Paella dish"
                />
                <CardContent className={classes.content}>
                    <Typography component="p" color="textPrimary" variant="p">
                        Basic protective measures against the new coronavirus


                    </Typography>
                </CardContent>
            </Card>
                <div className={classes.space10} />
                <Divider light />
                <div className={classes.space10} />
            </div>)
            }
        </div >
    );
}