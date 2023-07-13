import React, { Component, Fragment } from 'react'
import axios from 'axios';

import Topimage from '../components/Topimage'
import Nav from '../common/Nav'
import Home from '../components/Home'
import Footer from '../components/Footer';
import Regs from '../components/Regs';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Cookies from 'js-cookie';
import Profile from '../components/Profile';
import ProfComment from '../components/ProfComment';
import Post from '../components/Post';

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
        if(localStorage.getItem('serial')){
            

            axios.get(`/amilogged/${localStorage.getItem('email')}`,{
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then(response=>{
                if(response.status === 200){
                    if(response.data.message == 'Yes'){
                        console.log(response.data.message)
                        this.setState({
                            email : localStorage.getItem('email'),
                            img_link : localStorage.getItem('image'),
                            sl_no : localStorage.getItem('serial'),
                            logged_in : localStorage.getItem('logged')
                        
                        });
                    }else if(response.data.message == 'No'){
                        console.log(response.data.mesage)
                        localStorage.clear();
                    }
                }
            }).catch(error=>{console.log(error)})
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
                        <Route exact path="/logot" component={()=><Logout serial={this.state.sl_no} />} />   
                        <Route exact path="/profile" component={()=><Profile sln={this.state.sl_no} />} />   
                        <Route exact path="/profilecomment" component={()=><ProfComment />} />  
                        <Route exact path="/post" component={()=><Post sln={this.state.sl_no} />} />  
                        
                    </Switch>

                    <Footer></Footer>
                </Fragment>
            </Router>
            
            
        )
    }
}

export default Header
