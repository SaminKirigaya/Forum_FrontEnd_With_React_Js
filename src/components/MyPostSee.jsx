
import React, { Component,Fragment } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import axios from 'axios'


export class MyPostSee extends Component {
    constructor(props){
        super(props);
        this.state = {
            redrct : 'No',
            posts : [],
            comments : [],
            resdata : '',
            comdata : '',
            post_no : null,
            writecoms : '',
            hascomment : false,
            liked : '',
            disliked : '',
            aftercomredirct : ''
        }
    }


    aftercomred=()=>{
        const {postno} = this.props.match.params;
        if(this.state.aftercomredirct == 'Yes'){
            this.setState({aftercomredirct : ''})
            return <Redirect to={'/mypostsee/'+postno}/>
            
        }
    }


    lovecom = (e,comno)=>{
        
        const {postno} = this.props.match.params;
        axios.get(`/comlike/${this.props.sln}/${comno}`).then(response=>{
            if(response.status === 200){
                if(response.data.message == 'Success'){
                    this.setState({aftercomredirct  : 'Yes'},()=>{
                        this.componentDidMount();
                    })
                    
                }
            }
            {/*if(response.status === 200){
                if(response.data.message == 'Success'){

                    if(this.state.liked == '' && this.state.disliked == ''){
                        this.setState({
                            liked: 'true',
                            dislike : 'false'
                    })
                    this.setState(prevState => {
                        const updatedComments = prevState.comments.map(comment => {
                        if (comment.slno === comno) {
                            return {
                              ...comment,
                              like_amount: comment.like_amount + 1
                            };
                          }
                          return comment;
                        });
                    
                        return {
                          comments: updatedComments
                        };
                      });
                    


                    }else if(this.state.disliked == 'true'){
                        this.setState({
                            liked: 'true',
                            dislike : 'false'
                    })
                    this.setState(prevState => {
                        const updatedComments = prevState.comments.map(comment => {
                        if (comment.slno === comno) {
                            return {
                              ...comment,
                              like_amount: comment.like_amount + 1,
                              dislike_amount : comment.dislike_amount -1
                            };
                          }
                          return comment;
                        });
                    
                        return {
                          comments: updatedComments
                        };
                      });
                    


                    }
                    
                    
                }
            }*/}
        }).catch(error=>{console.log(error)})

        {/*change like amount number here*/}
        
            
        
        

    }

    dislovecom=(e,comno)=>{
        
        const {postno} = this.props.match.params;
        axios.get(`/comdislike/${this.props.sln}/${comno}`).then(response=>{
            if(response.status === 200){
                if(response.data.message == 'Success'){
                    this.setState({aftercomredirct  : 'Yes'},()=>{
                        this.componentDidMount();
                    })
                }
            }
            console.log(response.data)
            {/*if(response.status === 200){
                if(response.data.message == 'Success'){
                    if(this.state.liked == '' && this.state.disliked == ''){
                        this.setState({
                            liked: 'false',
                            dislike : 'true'
                    })
                    this.setState((prevState) => {
                        const updatedComments = prevState.comments.map(comment => {
                        if (comment.slno === comno) {
                            return {
                              ...comment,
                              dislike_amount: comment.dislike_amount + 1
                            };
                          }
                          return comment;
                        });
                    
                        return {
                          comments: updatedComments
                        };
                      });

                    }else if(this.state.liked == 'true'){

                        this.setState({
                            liked: 'false',
                            dislike : 'true'
                        })
                        this.setState((prevState) => {
                            const updatedComments = prevState.comments.map(comment => {
                            if (comment.slno === comno) {
                                return {
                                  ...comment,
                                  dislike_amount: comment.dislike_amount + 1,
                                  like_amount : comment.like_amount-1
                                };
                              }
                              return comment;
                            });
                        
                            return {
                              comments: updatedComments
                            };
                          });
                    }
                }
            }*/}
        }).catch(error=>{console.log(error)})
        
        {/*change dislike amount number here*/}
        
    }

    submitcom=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('comment', this.state.writecoms);
        const {postno} = this.props.match.params;
        axios.post(`/comment/${this.props.sln}/${postno}`, formdata, {
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status === 200){
                if(response.data.message == 'Comment Successful'){
                    this.setState({
                        posts : response.data.update_post,
                        comments : response.data.comments
                    })
                    this.setState({writecoms : ''})
                    document.getElementById("coms").value =  '';
                }
                
            }
        }).catch(error=>{
            console.log(error)
        })
    }

    showcoms = ()=>{
        console.log('start')
        if(this.state.comments.length>1){
            console.log('here')
            return  this.state.comments.map((eachone)=>{
                return  <div className='postbox3 mt-5 p-4 mx-auto' key={eachone.slno}>
                <div className='row bodbot p-2'>   
                    <div className='col d-flex justify-content-start flex-column flex-md-row text-break'><div className='imgbox me-3'><img className='imgfit' src={eachone.image}></img></div><span><span className="postbold">{eachone.author}</span><br></br>posted at : {eachone.creating_time}</span> </div>
                </div>
                <div className='row mt-3 p-2'>
                    <div className='col d-flex justify-content-start flex-column flex-md-row text-break'>
                        <p>{eachone.comment}</p>
                    </div>
                </div>
                <div className='row bodtop p-2'>   
                    <div className='col d-flex justify-content-center flex-row flex-md-row text-break'>
                        <div className='row rowwid d-flex justify-content-center flex-row'>
                            <div onClick={(e)=>{this.lovecom(e,eachone.slno)}} className='col col-md-6 d-flex justify-content-center align-items-center'><i className="fa-solid fa-heart fa-lg"></i>&nbsp;{eachone.like_amount>100000 ? Math.floor(eachone.like_amount/100000) +'M': eachone.like_amount>1000 ? Math.floor(eachone.like_amount/1000) +'K' : eachone.like_amount}</div>
                            <div onClick={(e)=>{this.dislovecom(e,eachone.slno)}} className='col col-md-6 d-flex justify-content-center align-items-center'><i className="fa-solid fa-heart-crack fa-lg"></i>&nbsp;{eachone.dislike_amount>100000 ? Math.floor(eachone.dislike_amount/100000) +'M': eachone.dislike_amount>1000 ? Math.floor(eachone.dislike_amount/1000) +'K' : eachone.dislike_amount}</div></div>
                        
                    </div>
                </div>

                
                
            </div>
            });
        }else if(this.state.comments){
            if(this.state.comments.slno>0){
            return  <div className='postbox3 mt-5 p-4 mx-auto'>
            <div className='row bodbot p-2'>   
                <div className='col d-flex justify-content-start flex-column flex-md-row text-break'><div className='imgbox me-3'><img className='imgfit' src={this.state.comments.image}></img></div><span><span className='postbold'>{this.state.comments.author}</span><br/>posted at : {this.state.comments.creating_time}</span></div>
            </div>
            <div className='row mt-3 p-2'>
                <div className='col d-flex justify-content-start flex-column flex-md-row text-break'>
                    <p>{this.state.comments.comment}</p>
                </div>
            </div>
            <div className='row bodtop p-2'>   
                <div className='col d-flex justify-content-center flex-row flex-md-row text-break'>
                    <div className='row rowwid d-flex justify-content-center flex-row'>
                        <div onClick={(e)=>{this.lovecom(e,this.state.comments.slno)}} className='col col-md-6 d-flex justify-content-center align-items-center'><i className="fa-solid fa-heart fa-lg"></i> &nbsp;{this.state.comments.like_amount>100000 ? Math.floor(this.state.comments.like_amount/100000) +'M': this.state.comments.like_amount>1000 ? Math.floor(this.state.comments.like_amount/1000) +'K' : this.state.comments.like_amount}</div>
                        <div onClick={(e)=>{this.dislovecom(e,this.state.comments.slno)}} className='col col-md-6 d-flex justify-content-center align-items-center'><i className="fa-solid fa-heart-crack fa-lg"></i>&nbsp; {this.state.comments.dislike_amount>100000 ? Math.floor(this.state.comments.dislike_amount/100000) +'M': this.state.comments.dislike_amount>1000 ? Math.floor(this.state.comments.dislike_amount/1000) +'K' : this.state.comments.dislike_amount}</div></div>
                    
                </div>
            </div>

            
            
        </div>
            }else{
                return  <p className='mx-auto'>Sorry No Comment Yet... Be The First To Solve The Issue !!!</p>
            }
        }
    }
    async componentDidMount(){
        if(!this.props.sln){

            window.location.href = "/";
        }
        const {postno} = this.props.match.params;
        
        try{
            const response = await axios.get(`/solve/${this.props.sln}/${postno}`,{
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            if(response.status === 200){
                this.setState({resdata : response.data.message})
                if(response.data.message == 'Successful'){
                    this.setState({
                        posts : response.data.postDetail,
                        comments : response.data.comments
                       
                    })

                    console.log(response.data.comments.length);

                    console.log(this.state.posts,this.state.comments.length)
                }
            }
    
        }catch(error){
            console.log(error)
        }
        
    }
    render() {
        
        
        return (
            <Fragment>
                
                <div className='container-fluid mostOutlayer'>
                    
                    <div className='postbox mt-5 p-4 mx-auto'>
                        <div className='row bodbot p-2'>   
                            <div className='col d-flex justify-content-start flex-column flex-md-row text-break'><div className='imgbox me-3'><img className='imgfit' src={this.state.posts.image}></img></div><span><span className='postbold'>{this.state.posts.author}</span><br/>posted at : {this.state.posts.creating_time}</span></div>
                        </div>
                        <div className='row mt-3 p-2'>
                            <div className='col d-flex justify-content-start flex-column flex-md-row text-break'>
                            <p><span className='postbold'>{this.state.posts.intro}</span><br></br>{this.state.posts.user_post}</p>
                            
                            </div>
                        </div>
                    </div>
                    <div className='reactbox postbox2 mt-2 mx-auto likepad'>
                        <div className='row row-cols-12 d-flex flex-row justify-content-center align-items-bottom'>
                            <div className='col-4 d-flex justify-content-center align-items-center'> <p><i className="fa-solid fa-thumbs-up"></i>&nbsp;{this.state.posts.like_amount>100000 ? Math.floor(this.state.posts.like_amount/100000) +'M': this.state.posts.like_amount>1000 ? Math.floor(this.state.posts.like_amount/1000) +'K' : this.state.posts.like_amount}</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><p><i className="fa-solid fa-thumbs-down"></i> {this.state.posts.dislike_amount>100000 ? Math.floor(this.state.posts.dislike_amount/100000) +'M': this.state.posts.dislike_amount>1000 ? Math.floor(this.state.posts.dislike_amount/1000) +'K' : this.state.posts.dislike_amount}</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><p><i class="fa-solid fa-pen-to-square"></i></p></div>
                        </div>
                    </div>
                    <div className='reactbox postpagecoms mt-2 mx-auto d-flex justify-content-center'>
                        <div className='row flex-column'>
                            <div className='col d-flex justify-content-center'><textarea id="coms" onChange={(e)=>{this.setState({writecoms : e.target.value})}} className='reactbox postpagecoms2 d-flex justify-content-center' placeholder='Please Be Respectful In Comment & Try To Make It As Short And Specific As Possible.'></textarea></div>
                            <div onClick={(e)=>{this.submitcom(e)}} className='col d-flex justify-content-center align-items-center mt-2'><button type="button" class="btn btn-sm btn-warning">Comment</button></div>
                        </div>
                            
                    </div>

                    <div className='reactbox postpagecoms mt-2 mx-auto d-flex justify-content-center'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col'>Posts Comments ...</div>
                        </div>
                    </div>

                    {this.showcoms()}
                    {this.aftercomred()}
                    
                    
                    {/*new coms*/}
                    

                </div>
                
            </Fragment>
        )
    }
}

export default MyPostSee
