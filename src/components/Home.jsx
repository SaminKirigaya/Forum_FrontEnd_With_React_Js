import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios'  


import propic from '../assests/images/homebg.jpg'  

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            randposts:[],
            latposts: []
        }
    }
    
    showrandposts(){
        if(this.state.randposts.length>0){
            return this.state.randposts.map((rpost)=>{
                return(
                    <div className="col eachpostr" key={rpost.id}>
                                <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                    <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                    <div className='col-md-6 colhpost'>
                                        <p>{rpost.author_email} &nbsp;&nbsp;<i className="fa-regular fa-circle-dot"></i> ( Posted At {rpost.creating_time} )<br></br><b>{rpost.intro}</b><br></br>{rpost.user_post.slice(0, 70)} &nbsp;...(See More)</p>
                                        <p></p>
                                    </div>
                                    {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 colhreprlikcom whitefont">
                                          <i className="fa-solid fa-flag icncol"></i>Report
                                        </div>
                                      ) : (
                                        <div onclick="reportapi" className="col-md-3 colhreprlikcom whitefont">
                                          <i className="fa-solid fa-flag icncol"></i>Report
                                        </div>
                                      )}
                                      {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 colclikpost darkfont2"><p>Log In <i className="fa-solid fa-circle-info"></i></p></div>
                                      ) : (
                                        <div onclick="seepost in otherpage" className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i className="fa-solid fa-circle-info"></i></p></div>
                                      )}
                                      {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i className="fa-solid fa-eye icncol"></i> Total View : {rpost.viewed}</p></div>
                                      ) : (
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i className="fa-solid fa-eye icncol"></i> Total View : {rpost.viewed}</p></div>
                                      )}
                                      {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i className="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> {rpost.like_amount}</p></div>
                                      ) : (
                                        <div onclick="lik post func" className="col-md-3 viewpost2"><p className="whitefont"><i className="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> {rpost.like_amount}</p></div>
                                      )}
                                      {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i className="fa-solid fa-thumbs-down icncol"></i> {rpost.dislike_amount}</p></div>
                                      ) : (
                                        <div onclick="unlike funct" className="col-md-3 viewpost3"><p className="whitefont"><i className="fa-solid fa-thumbs-down icncol"></i> {rpost.dislike_amount}</p></div>
                                      )}
                                    
                                    
                                </div>

                    
                    
                    </div>
                )
            });
        }
        
    }

    showtopposts(){
        if(this.state.latposts.length>0){
            return this.state.latposts.map((tpost)=>{
                return(
                    <div className="col postlatest" key={tpost.id}>
                                <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                    <div className="col-md-3 p-0 imglatest"><img className="proclslatest" src={propic}></img></div>
                                    <div className='col-md-6 postfldlatest'>
                                        <p>{tpost.author_email} &nbsp;&nbsp;<i className="fa-regular fa-circle-dot"></i> ( Posted At {tpost.creating_time} )<br></br><b>{tpost.intro}</b><br></br>{tpost.user_post.slice(0, 70)} &nbsp;...(See More)</p>
                                        
                                    </div>
                                    {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                        <div className="col-md-3 clikpostltst darkfont2"><p>Log In <i className="fa-solid fa-circle-info"></i></p></div>
                                      ) : (
                                        <div onclick="solve paeg func" className="col-md-3 clikpostltst darkfont2"><p>Let's Solve <i className="fa-solid fa-circle-info"></i></p></div>
                                      )}
                                    
                                    
                                    
                                    
                                </div>

                        
                        
                            </div>
                ) 
            })
        }
    }

    

        async componentDidMount() {
            try {
            const response = await axios.get('/homepost', {
                headers: {
                'Content-Type': 'application/json',
                },
            });
            const response2 = await axios.get('/latestpost', {
                headers: {
                'Content-Type': 'application/json',
                },
            });
            this.setState({ latposts: response2.data.toppost });
            this.setState({ randposts: response.data.randomposts });
            console.log(this.state.latposts);
            } catch (error) {
            console.log(error);
            }

            
        }

    render() {
        return (
            <Fragment>
                <div className="container-fluid homesize">
                    
                    <div className="row vw-90 row-cols-1 row-cols-md-2">
                        <div className="col homefirst">
                            <div className="row row-cols-1 m-0 randpost">
                                {this.showrandposts()}
                                
                                
                                
                                
                                
                                
                            </div>
                            <div className="row row-cols-1 pagn">
                            </div>
                        </div>
                        <div className="col homesecond">
                        <div className="row row-cols-1 m-0 p-0 tppst">
                            <p className="d-flex justify-content-center p-0">LATEST POSTS</p>
                        </div>
                        <div className="row row-cols-1 tppstbody">
                            
                            {this.showtopposts()}

                            
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home
