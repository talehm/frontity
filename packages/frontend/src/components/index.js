import React from 'react'
import { connect } from 'frontity'




const Root = ({ state }) => {
    return (
        <>
            <h1>Frontity Example 123</h1>
            <p>{state.router.link}</p>
        </>
    );
};

export default connect(Root)