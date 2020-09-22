import React from "react";
// plugin that creates slider
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Badge from "../../components/Badge/Badge.js";
//import { connect } from "react-redux"
import Skeleton from '@material-ui/lab/Skeleton';
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { getBlogs } from "../../actions/blogActions"
import { connect, styled, decode } from "frontity";
import Link from "../../themes/link";
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(styles);

const SectionTags = ({ state, actions, libraries, tags }) => {
    const classes = useStyles();

    React.useEffect(() => {
        //actions.state.fetch("/")



    }, [state.router.link])
    return (
        <Paper>
            <div className={classes.space20} />
            <div className={classes.container}>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={12}>
                        <div className={classes.title}>
                            <h2>Tags</h2>
                        </div>
                        {tags.length > 0 ? tags.map((tag, i) => <Badge key={i} className={classes.tagBadge} ><Link link={tag.link} activeStyle={{ color: 'red' }}>#{tag.name} <span style={{ marginLeft: 10 }}>{tag.count}</span></Link></Badge>) : [1, 2, 3].map(i => <Skeleton animation="wave" />)}
                    </GridItem>
                </GridContainer>

            </div>
            <div className={classes.space20} />
        </Paper>
    );
}
export default connect(SectionTags)
/*
function SectionTags(props) {
    const classes = useStyles();
    const { tags } = props

    const handleClickTag = tag => {
        props.getBlogs(0, 1, tag)
    }
    return (
        <div className={classes.container}>
            <div className={classes.space20} />
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.title}>
                        <h3>Tags</h3>
                    </div>
                    {tags.length > 0 ? tags.map((tag, i) => <Badge key={i} className={classes.tagBadge} ><Link to={"/blog/tag/" + tag.slug} onClick={() => handleClickTag(tag.slug)} activeStyle={{ color: 'red' }}>{tag.name} {tag.count}</Link></Badge>) : [1, 2, 3].map(i => <Skeleton animation="wave" />)}
                </GridItem>
            </GridContainer>
            <div className={classes.space20} />
        </div>
    );
}

const mapStateToProps = state => ({
    tags: state.blog.tags,
})
export default withRouter(connect(mapStateToProps, { getBlogs })(SectionTags)) */