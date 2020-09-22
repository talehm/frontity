import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
// @material-ui/icons
// core components
import { categories } from "../../config/categories"
import Grid from "@material-ui/core/Grid"
import Link from "../../themes/link";

import styles from "../../assets/jss/nextjs-material-kit/pages/components.js";
import Parallax from "../../components/Parallax/Parallax.js"
import Button from "../../components/CustomButtons/Button.js"
import GridItem from "../../components/Grid/GridItem.js"
import GridContainer from "../../components/Grid/GridContainer.js"
import MenuItem from '@material-ui/core/MenuItem'
import MetaTags from 'react-meta-tags'
import TextField from '@material-ui/core/TextField'
import Search from "@material-ui/icons/Search"
import CustomInput from "../../components/CustomInput/CustomInput.js"
import SectionCategory from "../../pages-sections/Components-Sections/SectionCategory.js"
import BlogSection from "../../pages-sections/LandingPage-Sections/BlogSection.js"
import SectionBlogHeader from "../../pages-sections/Components-Sections/SectionBlogHeader.js"
import MuButton from "@material-ui/core/Button"

const useStyles = makeStyles(styles);


function isCategoryActive() {
    var i = 0
    categories.map((value, key) => {
        if (value.active) {
            i++
        }
    })
    if (i > 0) {
        return true
    }
    else {
        return false
    }
}
export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [currency, setCurrency] = React.useState('all');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            {/* <MetaTags>
                <title>Funnydef Home</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags> */}
            <Parallax image={"http://www.mylocalwp.com/wp-content/uploads/profile-bg.jpg"}>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Funnydef</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material Kit based on Material-UI and NextJS.
                                </h3>

                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax >

            <div className={classNames(classes.main, classes.mainRaised)}>
                {isCategoryActive() ? <SectionCategory /> : null}
                <SectionBlogHeader header="blog" />
                <div className={classes.blogContainer}>
                    <BlogSection />
                    <GridContainer justify="center">
                        <Grid item style={{ marginBottom: 30 }} >
                            <Link link={"/blog"}><MuButton color="primary" variant="contained" >See More </MuButton></Link>
                        </Grid>
                    </GridContainer>
                </div>
            </div>
        </div >

    );
}
