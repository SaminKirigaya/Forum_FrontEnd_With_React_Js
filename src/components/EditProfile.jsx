import React, { Component,Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';

export class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            'mail': '',
            'country' : '',
            'age' : '',
            'gender' : '',
            'joined' : '',
            'imlink' : '',
            'resdata' : '',
            'redrct' : 'No'

        }
    }

    lesredrct = ()=>{
        if(this.state.redrct =='Yes'){
            return <Redirect to="/" />
        }
    }

    aftersubmit=()=>{
        if(this.state.resdata){
            return  <p>{this.state.resdata}</p>
            
        }
    }
    formedit = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        if(!this.state.imlink){
            formdata.append('email',this.state.mail);
            formdata.append('countrys',this.state.country);
            formdata.append('ages',this.state.age);
            formdata.append('genders',this.state.gender);
            

        }else{
            formdata.append('email',this.state.mail);
            formdata.append('countrys',this.state.country);
            formdata.append('ages',this.state.age);
            formdata.append('genders',this.state.gender);
            formdata.append('images',this.state.imlink);
            
        }
        
        

        axios.post(`/changeprofilesub/${this.props.sln}`,formdata,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(response=>{
            if(response.status === 200){
                console.log(response.data.message)
                this.setState({resdata : response.data.message})

                if(response.data.message == 'Successful Please Login Again.' || response.data.message == 'Successful'){
                    document.getElementById("val1").value = '';
                    document.getElementById("val2").value = '';
                    document.getElementById("val3").value = '';
                    document.getElementById("val4").value = '';
                    document.getElementById("val5").value = '';
                    
                    this.setState({'redrct' : 'Yes'});
                    setTimeout(()=>{window.location.reload();},1300)
                }
                
            }
            
        }).catch(error=>{console.log(error)})
        
    } 
    async componentDidMount(){
        if(!this.props.sln ){

            window.location.href = "/";
        }

        try{
            const response = await axios.get(`/profile/${this.props.sln}`,{
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            
            if(response.status === 200){
                this.setState({
                    'mail' : response.data.email,
                    'country' : response.data.country,
                    'gender' : response.data.gender,
                    'age' : response.data.age,
                    'joined' : response.data.joined,
                    'imlink' : response.data.imagelink
                });
            }


        }catch(error){
            console(error)
        }
    }

    render() {
        return (
            <Fragment>
                <div className="container-fluid proful p-0 d-flex justify-content-center">
                    
                    <div className="bordofprof">
                        <div className="imgboxt d-flex justify-content-center mb-3 mb-md-0">
                            <div className="row row-cols-1 row-cols-md-10 d-flex justify-content-center">
                                <div className="col col-md-12">{this.aftersubmit()}</div>
                            </div>
                            
                        </div>
                        <div className="imgboxt d-flex justify-content-center mb-3 mb-md-0">
                            <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center mb-md-3">
                                <div className="col d-flex justify-content-center mb-md-4"><img className="profimage" src={this.state.imlink}></img></div>
                            </div>
                        </div>
                        <div className="container-fluid profinfbox">
                            <form onSubmit={e=>{this.formedit(e)}} className="row row-cols-1 row-cols-md-2 d-flex justify-content-center flex-row">
                                
                                <div className="col col-md-5 mt-2 mt-md-0"><i className="fa-solid fa-user"></i> UserName : {this.state.mail.split('@',1)}</div>
                                <div className="col col-md-5 brkwrd"><i className="fa-solid fa-envelope"></i> Email : <input id="val1" className="editdes" value={this.state.mail} onChange = {e=>{this.setState({mail : e.target.value})}}></input></div>
                                <div className="col col-md-5"><i className="fa-solid fa-globe"></i> Country : <input id="val2" className="editdes" value={this.state.country} onChange = {e=>{this.setState({country : e.target.value})}}></input></div>
                                <div className="col col-md-5"><i className="fa-solid fa-user-secret"></i> Age : <input id="val3" className="editdes" value={this.state.age} onChange = {e=>{this.setState({age : e.target.value})}}></input></div>
                                <div className="col col-md-5"><i className="fa-solid fa-venus-mars"></i> Gender : <select id="val4" className="editdes3" onChange = {e=>{this.setState({gender : e.target.value})}}><option selected disabled>Select Gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Others">Others</option></select></div>
                                <div className="col col-md-5"><i className="fa-regular fa-calendar-days"></i> Image : <input id="val5" onChange = {e=>{this.setState({imlink : e.target.files[0]})}} type="file" className="custom-file-input editdes2" /></div>
                                <div className="col d-flex justify-content-around mt-2 mt-md-4"><button type="submit" className="btn btn-sm btn-primary me-1 me-md-0 probtn">Edit</button></div>
                            </form>
                        </div>
                    </div>
                </div>   
                {this.lesredrct()} 

            </Fragment>
    
        )
    }
}

export default EditProfile
