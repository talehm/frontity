import React from 'react'
import { connect } from 'frontity'

const Link = ({ href, actions, children }) => {
    return (
        <div>
            <a href={href} onClick={e => {
                e.defaultPrevented()
                actions.router.set(href)
            }}>{children}</a>
        </div>
    )
}

export default connect(Link)