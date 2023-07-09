import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useHistory, useLocation} from "react-router-dom"

import Topimage from '../components/Topimage'
import Nav from '../common/Nav'



export class Header extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Topimage />
                    <Nav />
                </Fragment>
            </Router>
            
        )
    }
}

export default Header
