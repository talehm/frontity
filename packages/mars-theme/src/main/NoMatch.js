import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styles from "../assets/jss/nextjs-material-kit/pages/components.js";
import MetaTags from 'react-meta-tags';

const GridItem = React.lazy(() => import("../components/Grid/GridItem.js"))
const GridContainer = React.lazy(() => import("../components/Grid/GridContainer.js"))
const Parallax = React.lazy(() => import("../components/Parallax/Parallax.js"))
const Button = React.lazy(() => import("../components/CustomButtons/Button.js"))
const CustomInput = React.lazy(() => import("../components/CustomInput/CustomInput.js"))
const Search = React.lazy(() => import("@material-ui/icons/Search"))

const MenuItem = React.lazy(() => import('@material-ui/core/MenuItem'))
const TextField = React.lazy(() => import('@material-ui/core/TextField'))

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
    const sampleSearchdata = [{ title: "test" }]

    const [currency, setCurrency] = React.useState('all');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div>
            <MetaTags>
                <title>Page 1</title>
                <meta name="description" content="Some description." />
                <meta property="og:title" content="MyApp" />
                <meta property="og:image" content="path/to/image.jpg" />
            </MetaTags>
            <Parallax image={require("../assets/img/blogs_default.jpg")}>
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
                                            <Button justIcon color="slack">
                                                <Search className={classes.searchIcon} />
                                            </Button>
                                        </form>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax >
            <div className={classNames(classes.main, classes.mainRaised, classes.mainNotFound)}>
                <h1>Not Found</h1>
            </div>

        </div >
    );
}
