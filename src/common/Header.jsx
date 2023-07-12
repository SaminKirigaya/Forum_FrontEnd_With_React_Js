import React, { Component, Fragment } from 'react'


import Topimage from '../components/Topimage'
import Nav from '../common/Nav'
import Home from '../components/Home'
import Footer from '../components/Footer';
import Regs from '../components/Regs';
import Login from '../components/Login';
import Cookies from 'js-cookie';

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
            img_link : ''
        }

    }
    async componentDidMount(){
        if(Cookies.get('email')){
            const mail = Cookies.get('email');
            this.setState({email : mail});
        }
        if(Cookies.get('image')){
            const im = Cookies.get('image');
            this.setState({img_link : im});
        }
        if(Cookies.get('serial')){
            const srl = Cookies.get('serial');
            this.setState({sl_no : srl});
        }
        if(Cookies.get('logged')){
            const lgd = Cookies.get('logged');
            this.setState({logged_in : true});
        }
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Topimage />
                    <Nav email={this.state.email} logged={this.state.logged_in} imglink={this.state.img_link} />

                    <Switch>
                        
                        <Route exact path="/" component={()=><Home usrmail={this.state.email} usrlogged={this.state.logged_in} />} />
                        <Route exact path="/regt" component={()=><Regs />} />
                        <Route exact path="/logs" component={()=><Login />} />        
                        
                        
                    </Switch>

                    <Footer></Footer>
                </Fragment>
            </Router>
            
            
        )
    }
}

export default Header
