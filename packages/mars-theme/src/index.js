import Theme from "./themes";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import { /* BlogHandler, */ BlogHandler, ArticleHandler, BlogByCategoryHandler, BlogByTagHandler } from './handlers/BlogHandlers'
/* import { PaginationRedirection } from './redirections/Redirections'
 */
import fetch from 'node-fetch'
import UrlPattern from 'url-pattern';
const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      isBlogReady: false,
      yoastHead: null,
      tags: [],
      categories: [],
      activeCategory: 0,
      upToDate: false,
      messageTimeout: 3000,
      per_page: 3,
      navigationPage: 2,
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },

    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {

    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(
          BlogHandler("blog main page", "/articles", 10),
          BlogHandler("blog with pagination", "/articles/:page(\\d+)", 10),
          BlogByCategoryHandler("blog by category with pagination ", "/articles/:category([A-Za-z0-9\-\_]+)/:page(\\d+)", 10),
          BlogByTagHandler("blog by tag", "/articles/tag/:tag([A-Za-z0-9\-\_]+)/", 5),
          BlogByTagHandler("blog by tag with pagination", "/articles/tag/:tag([A-Za-z0-9\-\_]+)/:page(\\d+)", 5),
          BlogByCategoryHandler("blog by category ", "/articles/:category([A-Za-z0-9\-\_]+)", 10),
          ArticleHandler("blog article", "/articles/:category([A-Za-z0-9\-\_]+)/:slug([A-Za-z0-9\-\_]+)", 5),
        );
      },
      getYoastHead: ({ state }) => {
        fetch(state.source.api + '/yoast/v1/get_head?url=' + state.frontity.url + state.router.link, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(data => state.theme.yoastHead = data.head)
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      showUpToDateMessage: ({ state }) => {
        state.theme.upToDate = true
        setTimeout(() => {
          state.theme.upToDate = false
        }, state.theme.messageTimeout);
      },
      getTags: ({ state }) => {
        const pattern = new UrlPattern('/:postType/(*)')
        const match = pattern.match(state.router.link)
        const postType = match.postType
        fetch(state.source.api + '/tags/' + postType, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(data => state.theme.tags = data)
      },
      getCategories: ({ state }) => {
        const pattern = new UrlPattern('/:postType/(*)')
        const match = pattern.match(state.router.link)
        const postType = match.postType
        fetch(state.source.api + '/categories/' + postType, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(res => res.json())
          .then(data => state.theme.categories = data)
      },
      setActiveCategory: ({ state }) => {
        const pattern = new UrlPattern('/:postType/')
        const match = pattern.match(state.router.link)
        if (match === null) {
          state.theme.categories.map(category => {
            if (state.router.link.includes(category.link)) {
              state.theme.activeCategory = category.id
            }
          })
        }
        else {
          state.theme.activeCategory = 0
        }
      },
      loadBlog: ({ state }) => {
        state.theme.blog = state.source.blog
        state.theme.isBlogReady = true
      },

      setNavigationPage: ({ state }) => {
        // Load More pages feature
        // state.theme.navigationPage += 1

        // Set Navigation Page for Pagination feature. 
        const pattern1 = new UrlPattern('/articles/tag/:tag/:page/')
        const pattern2 = new UrlPattern('/articles/:page/')
        const pattern3 = new UrlPattern("/articles/:category([A-Za-z0-9\-\_]+)/:page(\\d+)")

        const match = pattern1.match(state.router.link)
          ? pattern1.match(state.router.link)
          : pattern2.match(state.router.link)
            ? pattern2.match(state.router.link)
            : pattern3.match(state.router.link)
        if (match === null) {
          var page = 1
        } else {
          page = match.page
        }
        //state.source.blog = {}
        state.theme.navigationPage = parseInt(page)
      },
      beforeSSR: async ({ state, actions, libraries }) => {
        //actions.source.fetch(state.router.link)
        actions.theme.getYoastHead()
        /* const response = await libraries.source.api.get({
          endpoint: "/yoast/v1/get_head",
          params: { url: state.frontity.url + state.router.link },
        });
        const data = await response.clone().json()
        console.log(data)
        state.theme.yoastHead = data.head */

      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe],
    },
  },
};

export default marsTheme;
