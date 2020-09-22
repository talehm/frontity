import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { Router, Route, Switch, withRouter, Redirect, useHistory } from 'react-router-dom'

import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from '@material-ui/core/Paper';
import styles from "../../assets/jss/nextjs-material-kit/pages/componentsSections/singlePostStyle.js";
import { ShareOnSocialMedia } from "./SectionSocialMedia.js";
const useStyles = makeStyles(styles);

function SocailMedia(props) {
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
        <div >
            <Paper elevation={3} className={classes.articlePaper}>

                <div class="section-heading">
                    <h2>Basic protective measures against the new coronavirus</h2>
                    <ShareOnSocialMedia />
                    <div class="sf-content-block content-block">
                        <div>

                            Stay aware of the latest information on the <a href="https://funnydef.com/forums/topic/outbreak-definition-outbreak-meaning/" target="_blank" rel="noopener noreferrer">COVID-19 outbreak</a>, available on the <a href="https://funnydef.com/forums/topic/who-definition-who-meaning/" target="_blank" rel="noopener noreferrer">WHO</a> website and through your national and local public health authority. Most people who become infected experience mild illness and recover, but it can be more severe for others. Take care of your health and protect others by doing the following:

</div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div><iframe src="https://www.youtube.com/embed/bPITHEiFWLc" width="560" height="475" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>Wash your hands frequently</h3>
Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.

<strong>Why?</strong>&nbsp;Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.

</div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>Maintain social distancing</h3>
Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.

<strong>Why?</strong>&nbsp;When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person coughing has the disease.

<iframe src="https://www.youtube.com/embed/6Ooz1GZsQ70" width="560" height="475" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>

                        </div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>Avoid touching eyes, nose and mouth</h3>
                            <strong>Why?&nbsp;</strong>Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.

</div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>Practice respiratory hygiene</h3>
Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.

<strong>Why?</strong>&nbsp;Droplets spread virus. By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19.

</div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>If you have fever, cough and difficulty breathing, seek medical care early</h3>
Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.

<strong>Why?</strong>&nbsp;National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.

<iframe src="https://www.youtube.com/embed/qF42gZVm1Bo" width="560" height="475" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe>

                        </div>
                    </div>
                    <div class="sf-content-block content-block">
                        <div>
                            <h3>Stay informed and follow advice given by your healthcare provider</h3>
Stay informed on the latest developments about COVID-19. Follow advice given by your healthcare provider, your national and local public health authority or your employer on how to protect yourself and others from COVID-19.

<strong>Why?</strong>&nbsp;National and local authorities will have the most up to date information on whether COVID-19 is spreading in your area. They are best placed to advise on what people in your area should be doing to protect themselves.

&nbsp;

</div>
                    </div>
                    <div class="section-heading">
                        <div class="section-heading">
                            <h2>Protection measures for persons who are in or have recently visited (past 14 days) areas where COVID-19 is spreading</h2>
                        </div>
                        <div class="sf-content-block content-block">
                            <div>
                                <ul>
                                    <li>Follow the guidance outlined above.</li>
                                </ul>
                                <ul>
                                    <li>Stay at home if you begin to feel unwell, even with mild symptoms such as headache and slight runny nose, until you recover.&nbsp;<strong>Why?</strong>&nbsp;Avoiding contact with others and visits to medical facilities will allow these facilities to operate more effectively and help protect you and others from possible COVID-19 and other viruses.</li>
                                </ul>
                                <ul>
                                    <li>If you develop fever, cough and difficulty breathing, seek medical advice promptly as this may be due to a respiratory infection or other serious condition. Call in advance and tell your provider of any recent travel or contact with travelers.&nbsp;<strong>Why?</strong>&nbsp;Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also help to prevent possible spread of COVID-19 and other viruses.</li>
                                </ul>
&nbsp;

</div>
                        </div>
                        <em>These materials are regularly updated on the official website based on new scientific findings as the epidemic evolves. See <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank" rel="noopener noreferrer">official website (click here)</a>:&nbsp;&nbsp;</em>

                    </div>
                </div>
                <ShareOnSocialMedia />
            </Paper>
        </div>
    );
}
export default withRouter(SocailMedia)
