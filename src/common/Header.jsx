import React, { Component, Fragment } from 'react'


import Topimage from '../components/Topimage'
import Nav from '../common/Nav'
import Home from '../components/Home'
import Footer from '../components/Footer';
import Regs from '../components/Regs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            sl_no : '',
            logged_in : false,
            post_no : null ,
            comment_no : null,
            img_link : null 
        }

    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Topimage />
                    <Nav email={this.state.email} logged={this.state.logged_in} />

                    <Switch>
                        
                        <Route exact path="/" component={()=><Home usrmail={this.state.email} usrlogged={this.state.logged_in} />} />
                        <Route exact path="/regt" component={()=><Regs />} />
                                
                        
                        
                    </Switch>

                    <Footer></Footer>
                </Fragment>
            </Router>
            
            
        )
    }
}

export default Header
