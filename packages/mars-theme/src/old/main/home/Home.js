import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
// @material-ui/icons
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";
// sections for this page
import Loader from 'react-loader-spinner'

import styles from "../../assets/jss/nextjs-material-kit/pages/components.js";
import logoImg from "../../assets/img/logo2.png"
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Search from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import MetaTags from 'react-meta-tags';
import MenuItem from '@material-ui/core/MenuItem';
const SectionCategory = React.lazy(() => import("../../pages-sections/Components-Sections/SectionCategory.js"))
const BlogSection = React.lazy(() => import("../../pages-sections/LandingPage-Sections/BlogSection.js"))
const SectionBlogHeader = React.lazy(() => import("../../pages-sections/Components-Sections/SectionBlogHeader.js"))

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

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const [currency, setCurrency] = React.useState('all');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <MetaTags>
                <title>Funnydef Home</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
            <Parallax image={require("../../assets/img/blogs_default.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Funnydef</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material Kit based on Material-UI and NextJS.
                                </h3>
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={10} md={8} lg={6}>

                                        <form noValidate autoComplete="on">
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                value={currency}
                                                onChange={handleChange}
                                                className={classNames(classes.selectCategory, classes.formControl)}
                                            >
                                                {currencies.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>

                                            <CustomInput
                                                black
                                                inputRootCustomClasses={classes.inputRootCustomClasses}
                                                formControlProps={{
                                                    className: [classes.formControl, classes.searchForm]
                                                }}
                                                inputProps={{

                                                    placeholder: "Search",
                                                    inputProps: {
                                                        "aria-label": "Search",
                                                        className: classes.searchInput
                                                    }
                                                }}
                                            />
                                            <Button color="slack" size="sm" className={classes.searchBtn}>
                                                <Search className={classes.searchIcon} /> Search
                                            </Button>
                                        </form>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax >

            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionCategory />
                <SectionBlogHeader header="blog" />
                <BlogSection />
                }
            </div>
        </div >

    );
}
