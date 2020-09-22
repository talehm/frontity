import React from "react";
// plugin that creates slider
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'

import classNames from "classnames";
import {
    FacebookShareButton,
    PinterestShareButton,

    TumblrShareButton,
    TwitterShareButton,

    WhatsappShareButton,

    FacebookIcon,

    PinterestIcon,

    TumblrIcon,
    TwitterIcon,

    WhatsappIcon,
} from "react-share";
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/socialMediaStyle.js";
library.add(faFacebook, faInstagram, faPinterest, faTumblr, faTwitter);
const useStyles = makeStyles(styles);

export const SocialMedia = () => {
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
        <div className={classNames(classes.container)}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} style={{ marginLeft: 15 }}>
                    <div className={classes.title}>
                        <h3>Follow us</h3>
                    </div>
                    <Button justIcon round color="white" className={classNames(classes.margin5, classes.twitter)}>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </Button>
                    <Button justIcon round color="white" className={classNames(classes.margin5, classes.instagram)}>
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </Button>
                    <Button justIcon round color="white" className={classNames(classes.margin5, classes.facebook)}>
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </Button>
                    <Button justIcon round color="white" className={classNames(classes.margin5, classes.pinterest)}>
                        <FontAwesomeIcon icon={['fab', 'pinterest']} />
                    </Button>
                    <Button justIcon round color="white" className={classNames(classes.margin5, classes.tumblr)}>
                        <FontAwesomeIcon icon={['fab', 'tumblr']} />
                    </Button>

                </GridItem>
            </GridContainer>
        </div>
    );
}

export const ShareOnSocialMedia = () => {
    const classes = useStyles();

    const size = 32
    const color = "white"
    const round = true
    return (
        <div>
            <FacebookShareButton
                className={classes.shareBtn}
                url="https://funnydef.com/what-to-do-during-quarantine-15-useful-tips/"
                quote={"http://funnydef.com"}
                hashtag="#programing joke">
                <FacebookIcon logoFillColor={color} size={size} round={round} />
            </FacebookShareButton>
            <WhatsappShareButton
                className={classes.shareBtn}
                url="https://funnydef.com/what-to-do-during-quarantine-15-useful-tips/"
                quote={"http://funnydef.com"}
                hashtag="#programing joke">
                <WhatsappIcon logoFillColor={color} size={size} round={round} />
            </WhatsappShareButton>
            <TwitterShareButton
                className={classes.shareBtn}
                url="https://funnydef.com/what-to-do-during-quarantine-15-useful-tips/"
                quote={"http://funnydef.com"}
                hashtag="#programing joke">
                <TwitterIcon logoFillColor={color} size={size} round={round} />
            </TwitterShareButton>
            <PinterestShareButton
                className={classes.shareBtn}
                url="https://funnydef.com/what-to-do-during-quarantine-15-useful-tips/"
                quote={"http://funnydef.com"}
                hashtag="#programing joke">
                <PinterestIcon logoFillColor={color} size={size} round={round} />
            </PinterestShareButton>
            <TumblrShareButton
                className={classes.shareBtn}
                url="https://funnydef.com/what-to-do-during-quarantine-15-useful-tips/"
                quote={"http://funnydef.com"}
                hashtag="#programing joke">
                <TumblrIcon logoFillColor={color} size={size} round={round} />
            </TumblrShareButton>
        </div>
    )
}
