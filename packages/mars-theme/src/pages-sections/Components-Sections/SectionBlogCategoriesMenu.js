import React from 'react'
import GridContainer from "../../components/Grid/GridContainer.js"
import GridItem from "../../components/Grid/GridItem.js"
import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js"
//import { connect } from "react-redux"
import MuButton from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { handleBlogCategory } from "../../actions/blogActions"
import { connect, styled, decode } from "frontity";
import Link from "../../themes/link";
import UrlPattern from 'url-pattern';

const useStyles = makeStyles(styles)

/* const handleBlogCategory = (id, index) => {
    setActive(index)
    setCategory(id)
    getBlogs(id, 1)
} */


const SectionBlogCategoriesMenu = ({ state, actions }) => {
    const classes = useStyles()
    //const { categories, active_category, handleBlogCategory } = props
    const { getCategories } = actions.theme
    const { categories } = state.theme

    const pattern = new UrlPattern('/:postType/(*)')
    const match = pattern.match(state.router.link)
    const postType = match.postType
    const allCategoryPattern = new UrlPattern('/:postType/(:page(\\d+)/)')

    React.useEffect(() => {
        getCategories()
        // new Promise((resolve, reject) => {
        //   resolve()
        // }).then(setActiveCategory())

    }, [state.router.link])
    const data = state.source.get(state.router.link)
    console.log(categories);

    return (
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
            <Link link={"/" + postType}>
                <MuButton variant={data.isBlog ? "contained" : "outlined"} color="primary" className={classes.blogCatgegory} /* onClick={() => redirectCategory(0, 'all', 0)} */ >
                    All
                </MuButton>
            </Link>
            {categories.map((value, i) => <Link link={value.link} ><MuButton variant={state.router.link.includes(value.link) ? "contained" : "outlined"} className={classes.blogCatgegory} color="primary" /* onClick={() => redirectCategory(value.id, value.name, i + 1)} */ >
                {value.name}
            </MuButton>
            </Link>
            )}
        </GridItem>
    )
}

/* const mapStateToProps = state => ({
    categories: state.blog.categories,
    active_category: state.blog.active_category
}) */

export default connect(SectionBlogCategoriesMenu)