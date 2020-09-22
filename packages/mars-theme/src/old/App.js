import React, { Component, Suspense } from 'react';
import './App.css';
import Loader from 'react-loader-spinner'

import HeaderLinks from "./components/Header/HeaderLinks.js";
import logoImg from "./assets/img/logo2.png"
import Footer from "./components/Footer/Footer.js";
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { initGA, logPageView } from './utils/analytics'
import { categories } from "./config/categories"
const Header = React.lazy(() => import("./components/Header/Header.js"))
const Home = React.lazy(() => import('./main/home/Home'))
const Blog = React.lazy(() => import('./main/blog/Blog'))
const BlogArticle = React.lazy(() => import('./main/blog/BlogArticle'))
const Jokes = React.lazy(() => import('./main/jokes/Jokes'))
const SingleJoke = React.lazy(() => import('./main/jokes/SingleJoke'))
const NoMatch = React.lazy(() => import('./main/NoMatch'))


const history = createHistory()
const CannotFind = () => (
  <div>
    <h1>Whoops - Cannot find content</h1>
  </div>
);
class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    // Google Analytics Initalize
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    // Google analytics Page View
    logPageView()
    history.listen(location => {
      logPageView()
    })
    //----//
    let comment = document.createComment(`
      Funnydef Frontend
      `);
    document.insertBefore(comment, document.documentElement);
    /* if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView() */

  }

  render() {

    const { rest } = this.props;
    //console.log(pageProps);
    const logo = <img style={{ width: 140 }} src={logoImg} />
    // Generate dynamic routes for each category
    const routerComponents = {
      funny_jokes: { main: Jokes, child: SingleJoke },
      dictionary: { main: Jokes, child: SingleJoke }
    }
    let routes = []

    function fillRoutes() {
      categories.map(category =>
        category.active ?
          routes.push(<Route exact path={category.link} component={routerComponents[category.name].main} />,
            <Route exact path={category.link + "/:name"} component={routerComponents[category.name].child} />
          )
          : null
      )
    }
    fillRoutes()
    return (
      <Suspense fallback={<Loader
        style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        type="Bars"
        color="#9c27b0"
        height={30}
        width={30}
        timeout={15000} //3 secs
      />}>
        <Router history={history}>
          <React.Fragment>
            <Header
              brand={logo}
              rightLinks={<HeaderLinks />}
              fixed
              color="transparent"
              changeColorOnScroll={{
                height: 100,
                color: "white"
              }}
              {...rest}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/blog/:name" component={BlogArticle} />
              {routes.map(route => route)}
              <Route exact path="/404" component={NoMatch} />
              <Redirect to="/404" />
            </Switch>
            <Footer />
          </React.Fragment >
        </Router>
      </Suspense >
    );
  }
}

export default App;
