import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";


import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import Head from "next/head";


const useStyles = makeStyles(styles);

export default function ProfilePage(props) {

    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>

            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Header
                color="transparent"
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <h1>Dictionary SEction</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


