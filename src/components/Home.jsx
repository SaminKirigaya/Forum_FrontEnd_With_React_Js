import React, { Component, Fragment } from 'react'
import propic from '../assests/images/homebg.jpg'  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios'  
import Pagination from 'react-js-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';




export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            randposts:[],
            latposts: [],
            currentPage: 1,
            postsPerPage: 10
        }
    }
    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
        };
    
    showrandposts(){
        const { randposts, currentPage, postsPerPage } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = randposts.slice(indexOfFirstPost, indexOfLastPost);
        if(this.state.randposts.length>0){
            return currentPosts.map((rpost)=>{
                return(
                    <div className="col eachpostr" key={rpost.slno}>
                        <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont" >
                            <div className="col-md-3 p-0 colhimg" ><img className="procls" src={propic}></img></div>
                            <div className='col-md-6 colhpost' >
                                <p>{rpost.author_email} &nbsp;&nbsp;<i className="fa-regular fa-circle-dot"></i> ( Posted At {rpost.creating_time} )<br></br><b>{rpost.intro}</b><br></br>{rpost.user_post.slice(0, 70)} &nbsp;...(See More)</p>
                                <p></p>
                            </div>
                            {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 colhreprlikcom whitefont" >
                                    <i className="fa-solid fa-flag icncol"></i>Report
                                </div>
                                ) : (
                                <div className="col-md-3 colhreprlikcom whitefont" >
                                    <i className="fa-solid fa-flag icncol"></i>Report
                                </div>
                                )}
                                {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 colclikpost darkfont2" ><p>Log In <i className="fa-solid fa-circle-info"></i></p></div>
                                ) : (
                                <div className="col-md-3 colclikpost darkfont2" ><p>Let's Solve <i className="fa-solid fa-circle-info"></i></p></div>
                                )}
                                {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 viewpost"><p className="whitefont" ><i className="fa-solid fa-eye icncol"></i> Total View : {rpost.viewed>100000 ? Math.floor(rpost.viewed/100000) +'M': rpost.viewed>1000 ? Math.floor(rpost.viewed/1000) +'K' : rpost.viewed}</p></div>
                                ) : (
                                <div className="col-md-3 viewpost"><p className="whitefont"><i className="fa-solid fa-eye icncol"></i> Total View : {rpost.viewed>100000 ? Math.floor(rpost.viewed/100000) +'M': rpost.viewed>1000 ? Math.floor(rpost.viewed/1000) +'K' : rpost.viewed}</p></div>
                                )}
                                {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 viewpost2"><p className="whitefont" ><i className="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> {rpost.like_amount>100000 ? Math.floor(rpost.like_amount/100000) +'M': rpost.like_amount>1000 ? Math.floor(rpost.like_amount/1000) +'K' : rpost.like_amount}</p></div>
                                ) : (
                                <div className="col-md-3 viewpost2" ><p className="whitefont"><i className="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> {rpost.like_amount>100000 ? Math.floor(rpost.like_amount/100000) +'M': rpost.like_amount>1000 ? Math.floor(rpost.like_amount/1000) +'K' : rpost.like_amount}</p></div>
                                )}
                                {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 viewpost3"><p className="whitefont" ><i className="fa-solid fa-thumbs-down icncol"></i> {rpost.dislike_amount>100000 ? Math.floor(rpost.dislike_amount/100000) +'M': rpost.dislike_amount>1000 ? Math.floor(rpost.dislike_amount/1000) +'K' : rpost.dislike_amount}</p></div>
                                ) : (
                                <div className="col-md-3 viewpost3" ><p className="whitefont"><i className="fa-solid fa-thumbs-down icncol"></i> {rpost.dislike_amount>100000 ? Math.floor(rpost.dislike_amount/100000) +'M': rpost.dislike_amount>1000 ? Math.floor(rpost.dislike_amount/1000) +'K' : rpost.dislike_amount}</p></div>
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
                    <div className="col postlatest" key={tpost.slno}>
                        <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont" >
                            <div className="col-md-3 p-0 imglatest" ><img className="proclslatest" src={propic}></img></div>
                            <div className='col-md-6 postfldlatest'>
                                <p>{tpost.author_email} &nbsp;&nbsp;<i className="fa-regular fa-circle-dot"></i> ( Posted At {tpost.creating_time} )<br></br><b>{tpost.intro}</b><br></br>{tpost.user_post.slice(0, 70)} &nbsp;...(See More)</p>
                                
                            </div>
                            {this.props.usrmail === '' && this.props.usrlogged === false ? (
                                <div className="col-md-3 clikpostltst darkfont2" ><p>Log In <i className="fa-solid fa-circle-info"></i></p></div>
                                ) : (
                                <div className="col-md-3 clikpostltst darkfont2" ><p>Let's Solve <i className="fa-solid fa-circle-info"></i></p></div>
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
            
            } catch (error) {
            console.log(error);
            }

            
        }

    render() {
        const { randposts, currentPage, postsPerPage } = this.state;
        const totalPosts = randposts.length;
        return (
            <Fragment>
                <div className="container-fluid homesize">
                    
                    <div className="row vw-90 row-cols-1 row-cols-md-2">
                        <div className="col homefirst">
                            <div className="row row-cols-1 m-0 randpost">
                                {this.showrandposts()}
                                
                                
                                
                                
                                
                                
                            </div>
                            <div className="row row-cols-1 pagn d-flex justify-content-center align-items-center">
                                <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={postsPerPage}
                                totalItemsCount={totalPosts}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange}
                                itemClass="page-item"
                                linkClass="page-link"
                                innerClass="pagination mx-auto"
                            />
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
