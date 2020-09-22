import React, { useState, useEffect } from "react";
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import { connect } from 'react-redux';
import { getJokes } from '../../actions/jokesActions'
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/jokeStyle.js";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from "../../components/CustomButtons/Button.js";
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import Loader from 'react-loader-spinner'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaugh, faLaughSquint, faGrinSquintTears } from '@fortawesome/free-solid-svg-icons'
const useStyles = makeStyles(styles);

const currencies = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'dictionary',
    label: 'Dictionary',
  },
  {
    value: 'jokes',
    label: 'Funny Jokes',
  },
  {
    value: 'quotes',
    label: 'Quotes',
  },
];
function JokeSection(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const emojis = [
    faLaugh, faLaughSquint, faGrinSquintTears
  ];
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid,
    classes.imgBlog
  );
  const [currency, setCurrency] = React.useState('all');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  }

  const handleGetStatusResponse = () => {
    console.log("successfull");

  }
  const handleError = () => {
    console.log("error");

  }

  useEffect(() => { props.getJokes('test', handleGetStatusResponse(), handleError()) });
  const singleJoke = <Card className={classes.jokeCard}>
    <CardActionArea>
      <GridContainer>
        <GridItem xs={12} style={{ padding: 10 }}>
          <Typography align="left" className={classes.jokeList}>If You Don’t Know How to Read, Find Another Joke.{emojis.map(emoji => <FontAwesomeIcon icon={emoji} className={classes.emoji} />)}</Typography>
        </GridItem>

      </GridContainer>
    </CardActionArea>
  </Card>
  console.log(props.jokes);

  return (
    <div className={classes.section}>

      <div>
        <GridContainer justify="center" className={classes.blogNavPills}>
          <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <Typography variant="h5" gutterBottom>

              I want to read  <TextField
                id="standard-select-currency"
                select
                value={currency}
                onChange={handleChange}
                className={classNames(classes.selectJokes, classes.formControl)}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField></Typography>
          </GridItem>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (<GridItem xs={12} sm={12} md={6} lg={6}>
            {singleJoke}
          </GridItem>))}
          <GridItem xs={12} sm={12} md={12} >
            <Button>See More</Button>
          </GridItem>
          <Loader
            type="Bars"
            color="#9c27b0"
            height={30}
            width={30}
            timeout={15000} //3 secs

          />
        </GridContainer>

      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { jokes: state.jokes.all };
}

export default connect(mapStateToProps, { getJokes })(JokeSection); 