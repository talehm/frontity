import React, { useEffect } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import logoImg from "../assets/img/logo2.png"
import Home from '../main/home/Home'
import HeaderLinks from "./Header/HeaderLinks.js";
import Header from "./Header/Header.js";
import Blog from "../main/blog/Blog"
//import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Article from "../main/blog/BlogArticle"
//import Test from './test'
//import { Helmet } from "react-helmet";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions, libraries }) => {

  // Get information about the current URL.
  //const data = state.source.get(state.router.link);
  //console.log(data)
  const { getYoastHead } = actions.theme
  const { yoastHead } = state.theme
  const logo = <img style={{ width: 140 }} alt="Logo" src={"http://www.mylocalwp.com/wp-content/uploads/logo2.png"} />
  useEffect(() => {
    /* actions.source.fetch("/");
    List.preload(); */
    /* libraries.source.handlers.push({
      name: "blogs",
      priority: 10,
      pattern: "/blogs/:slug/",
      func: async ({ link, params, state, libraries, force }) => {
        // 1. get product
        const response = await libraries.source.api.get({
          endpoint: "blog",
          params: { slug: params.slug },
        });

        // 2. add product to state
        const [product] = await libraries.source.populate({
          response,
          state,
          force,
        });

        // 3. add link to data
        Object.assign(state.source.data[link], {
          id: product.id,
          type: product.type,
          isPostType: true,
          isProduct: true,
        });
      },
    }); */

    //actions.source.fetch("/");
    List.preload();
    actions.source.fetch(state.router.link)
    getYoastHead()
  }, [state.router.link]);


  const data = state.source.get(state.router.link);
  //console.log(data);
  console.log(data);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      {/* <head>
        <meta property="og:title" content="bla bla bla" />
        <meta property="og:description" content="__OG_DESCRIPTION__" />
      </head> */}

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <Header
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 100,
          color: "dark"
        }}

      />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      {<Switch>
        <Loading when={data.isFetching} />
        <Home when={data.isArchive && data.isHome} />
        <Blog when={data.isBlogArchive || data.isBlogByCategory || data.isArticlesByTag} />
        {<List when={data.isArchive} />}
        <Article when={data.isPostType && data.isBlogArticle} />
        <PageError when={data.isError} />

      </Switch>}
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    overflow-x:hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
