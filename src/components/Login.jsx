import React, { Component, Fragment } from 'react'
import axios from 'axios';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import Cookies from 'js-cookie';

export class Login extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            pass : '',
            resdata : ''
        }
    }

    respdatafunc= ()=>{
        if(this.state.resdata){
            if(this.state.resdata.message == "Login Successful"){
                const expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000);
                Cookies.set('token',this.state.resdata.token);
                Cookies.set('email',this.state.resdata.useremail);
                Cookies.set('image',this.state.resdata.image);
                Cookies.set('serial',this.state.resdata.usersl);
                Cookies.set('logged','true');

                setTimeout(()=>{window.location.reload()},500)
                return <Redirect to=""></Redirect>
                
            }else if(this.state.resdata.message == 'Sorry Password Does Not Match ... Make Sure To Insert Valid Password'){
                return (
                    <div>
                    <li><p>{this.state.resdata.message}</p></li>
                    
                    </div> 
                )
            }else if(this.state.resdata.message == 'Sorry You Are Already Logged In ...'){
                return <div>
                    <li><p>{this.state.resdata.message}</p></li>
                    
                </div> 
            }else if(this.state.resdata.message == 'Sorry Email Do Not Exist ... Make Sure To Insert Valid User Email.'){
                return <div>
                    <li><p>{this.state.resdata.message}</p></li>
                    
                </div> 
            }
        }else{
            return (
                <div>
                    <li>Your Password Must Be Valid and Not Empty.</li>
                    <li>Your Email Must Be valid and Not Empty</li>
                    
                </div>      
            )
        }
    }

    formsubmited= (e) => {
        e.preventDefault();
        const headval = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        const formData = new FormData();
        formData.append('email',this.state.email);
        formData.append('password',this.state.pass);

        axios.post('/login', formData, headval)
        .then(response => {
            // Handle the response data
            console.log(response.data);
            this.setState({resdata : response.data})
        })
        .catch(error => {
            // Handle the error
            console.log(error);
        });

    }


    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-red regform">
                    
                
                    <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>

                        <form method="POST" onSubmit={this.formsubmited} encType='multipart/form-data'>
                            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                                <div className="col col-md-10 p-3 mb-5 rulebox d-flex justify-content-center flex-column">
                                    {this.respdatafunc()}
                                </div>
                                <div className='col col-md-10 mb-2'><input onChange={(e)=>{this.setState({email : e.target.value})}} className="form-control form-control-sm" type="text" placeholder="Email@" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-10 mb-2'><input onChange={(e)=>{this.setState({pass : e.target.value})}} className="form-control form-control-sm" type="text" placeholder="Password" aria-label=".form-control-sm example" /></div>


                                <div className="col-3 d-flex justify-content-center"><button type="submit" className="btn btn-sm btn-outline-primary btnsubdes">Login</button></div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login
