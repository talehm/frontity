import React, { useEffect } from "react";
import { connect } from "frontity";
import styles from "../assets/jss/nextjs-material-kit/pages/landingPageSections/blogStyle.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";

const useStyles = makeStyles(styles);

// In a React component that uses "connect":
const SomePost = ({ actions, state, libraries }) => {
    useEffect(() => {
        // No need to use `async/await` here
        //actions.source.fetch("/blogs/blog-category/blog-post-2/");

        /* const response = await libraries.source.api.get({
            endpoint: "/categories",
            params: { post_type: "/blog" },
        }); */
        fetch('http://www.mylocalwp.com/wp-json/categories/blog')
            .then(response => response.json())
            .then(data => console.log(data));
        async function test() {
            const response = await libraries.source.api.get({
                endpoint: "/categories/blog",

            })
            const entitiesAdded = await libraries.source.populate({ response, state })
            /* entitiesAdded.forEach(({ type, id, link }) => {
                console.log({ type, id, link })
            }) */
            console.log(response.body)
        }
        test()
        /* const [product] = await libraries.source.populate({
            response,
            state,
            force,
        }); */
        //response.then(res => res.json()).then(res => console.log(res))

    }, []);
    const classes = useStyles();
    const data = state.source.get(state.router.link);
    // The data will not exist at first, `dataPost.isReady` will be false.
    // But then, it will rerender when `actions.source.fetch` is finished.
    const dataPost = state.source.get("/blogs/blog-category/blog-post-2/");
    // This will work just fine.
    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <p style={{ marginTop: 150 }}>READY</p>
        </div>)
};

export default connect(SomePost);