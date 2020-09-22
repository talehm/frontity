import React from 'react'
import { initGA, logPageView } from './../../utils/analytics'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export default class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        history.listen(location => {
            console.log("df");

            logPageView()

        })
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}