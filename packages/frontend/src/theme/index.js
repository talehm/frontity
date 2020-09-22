import React from 'react'
import { connect } from 'frontity'
import Link from './link'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
//import Blog from './blog'


const Root = ({ state }) => {
    return (
        < >

            <h1>Frontity Example 123</h1>
            <p>{state.router.link}</p>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/page/2">More Posts</Link>
                <Link href="blog">Lorem Ipsum</Link>

            </nav>

        </>
    );
};

export default connect(Root)