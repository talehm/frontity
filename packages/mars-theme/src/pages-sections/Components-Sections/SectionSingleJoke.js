import React from "react";
// plugin that creates slider
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from '@material-ui/core/Paper';
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/jokeStyle";
import { ShareOnSocialMedia } from "./SectionSocialMedia.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaugh, faLaughSquint, faGrinSquintTears } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(styles);

export default function SocailMedia() {
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
    const data = ['“It’s no good, sir,” said the hopeless pupil to his English teacher. “I try to learn, but everything you say goes in both ears and out the other.” ', '“Goes in both ears and out the other?” asked the puzzled teacher. “But you only have two ears.”', '“You see, sir? I’m no good at math, either.”']
    return (
        <div >
            <Paper elevation={3} className={classes.articlePaper}>
                <div class="section-heading">
                    {/*                     <h2><span style={{ color: "#000080" }}>20 Things To Do In The Drive Through</span></h2>
 */}                    <ShareOnSocialMedia />
                    {/*                     <FontAwesomeIcon icon={faGrinSquintTears} className={classes.emoji} />
 */}                    {data.map((joke, index) => <Paper className={classNames(classes.jokePaper, index % 2 === 0 ? classes.jokeOdd : classes.jokeEven)} > {joke} </Paper>)}

                </div >
                <ShareOnSocialMedia />
            </Paper >
        </div >
    );
}
