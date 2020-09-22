import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/recentTopicStyle.js";
import Divider from '@material-ui/core/Divider';
import { connect, styled, decode } from "frontity";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid"
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(styles);

const MediaControlCard = ({ state, actions, relatedPosts }) => {
    const classes = useStyles();
    //const theme = useTheme();
    const { getCategories } = actions.theme
    const { categories } = state.theme

    React.useEffect(() => {
        relatedPosts.map(value => {
            if (!value.isReady) {
                actions.source.fetch(value)
            }
        })
    }, [state.router.link])
    return (
        <Paper>
            <div className={classes.space20} />
            <div className={classes.container}>

                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        <div className={classes.title} style={{ marginLeft: 15 }}>
                            <h2 style={{ fontSize: 18 }}>Related Posts</h2>
                        </div>
                        {relatedPosts.map(value => {
                            var data = state.source.get(value)
                            if (data.isReady) {
                                const post = state.source[data.type][data.id]
                                return (
                                    <div>
                                        <Card className={classes.root} style={{ padding: 10 }}>
                                            <CardMedia
                                                className={classes.media}
                                                image={"http://www.mylocalwp.com/wp-content/uploads/nextjs_header.jpg"}
                                                title={post.title}
                                            />
                                            <CardContent className={classes.content}>
                                                <Typography component="p" style={{ color: "rgb(30, 115, 190)" }} variant="p">
                                                    {post.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <div className={classes.space10} />
                                        <Divider light />
                                        <div className={classes.space10} />
                                        <Card className={classes.root} style={{ padding: 10 }}>

                                            <CardMedia
                                                className={classes.media}
                                                image={"http://www.mylocalwp.com/wp-content/uploads/nextjs_header.jpg"}
                                                title={post.title}

                                            />
                                            <CardContent className={classes.content}>
                                                <Typography component="p" style={{ color: "rgb(30, 115, 190)" }} variant="p">
                                                    {post.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <div className={classes.space10} />
                                        <Divider light />
                                        <div className={classes.space10} />
                                        <Card className={classes.root} style={{ padding: 10 }}>

                                            <CardMedia
                                                className={classes.media}
                                                image={"http://www.mylocalwp.com/wp-content/uploads/nextjs_header.jpg"}
                                                title={post.title}

                                            />
                                            <CardContent className={classes.content}>
                                                <Typography component="p" style={{ color: "rgb(30, 115, 190)" }} variant="p">
                                                    {post.title}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <div className={classes.space10} />
                                        <Divider light />
                                        <div className={classes.space10} />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                        {/* {[1, 2, 3, 4, 5].map(index => <div> <Card className={classes.root}>

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
            } */}
                    </Grid >
                </Grid>
                <div className={classes.space20} />
            </div >
            <div className={classes.space20} />
        </Paper>
    );
}

export default connect(MediaControlCard)