import React, { Component,Fragment } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class ForgetPass extends Component {
    constructor(props){
        super(props);
        this.state = {
            pass : '',
            conpass : '',
            resdata : '',
            redrct : 'No'
        }
    }

    aftersubmit = ()=>{
        if(this.state.resdata){
            return  <p>{this.state.resdata}</p>
        }else{
            return  <p>Your Password Must Contain 6-50 Digits Letters,Numbers or @ ! *</p>
        }
    }

    lesredrct= ()=>{
        if(this.state.redrct == 'Yes'){
            return  <Redirect to="/" />
        }
    }

    formsubmited=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('pass',this.state.pass);
        formdata.append('cpass', this.state.conpass);

        axios.post(`/changepasssub/${this.props.sln}`,formdata,{
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(response => {
            if(response.status === 200){
                this.setState({resdata : response.data.message})
                if(response.data.message == 'Successful Please Login Again.'){
                    this.setState({
                        pass : '',
                        conpass : ''
                    });
                    document.getElementById("pass").value = '';
                    document.getElementById("cpass").value = '';
                    
                    setTimeout(()=>{this.setState({redrct : 'Yes'})},1200)
                    setTimeout(()=>{window.location.reload();},1300)
                    
                }
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <Fragment>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="forgtpass">
                        <form onSubmit={e=>{this.formsubmited(e)}}>
                            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                                <div className="col col-md-10 p-3 mb-5 rulebox d-flex justify-content-center flex-row">
                                    {this.aftersubmit()}
                                </div>
                                <div className='col col-md-5 mb-2'><input id="pass" onChange={(e)=>{this.setState({pass : e.target.value})}} className="form-control form-control-sm" type="text" placeholder="Password" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><input id="cpass" onChange={(e)=>{this.setState({conpass : e.target.value})}} className="form-control form-control-sm" type="text" placeholder="Confirm Password" aria-label=".form-control-sm example" /></div>
                                
                                <div className="col-3 d-flex justify-content-center"><button type="submit" className="btn btn-sm btn-outline-primary btnsubdes">Change Password</button></div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.lesredrct()}
            </Fragment>
        )
    }
}

export default ForgetPass
