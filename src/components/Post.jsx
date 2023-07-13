import React, { Component,Fragment } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            prob_intro : '',
            prob_type : '',
            post : '',
            resdata : ''
        }
    }
    
    showtype=()=>{
        return  this.state.posts.map((post) => {
            return <option key={post.slno} value={post.code_type}>{post.code_type}</option>
        });
        
    }

    postsubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('prob_intro', this.state.prob_intro);
        formdata.append('prob_type',this.state.prob_type);
        formdata.append('post',this.state.post);

        
        axios.post(`/post/${this.props.sln}`,formdata,{
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(
            response =>{
                if(response.status===200){
                    console.log(response.data)
                    this.setState({resdata : response.data.message});
                    if(response.data.message == 'Successful'){
                        document.getElementById("intro").value = ''
                        document.getElementById("fullt").value =  ''
                        document.getElementById("type").value = ''

                    }
                    
                }

            }
        ).catch(error=>{console.log(error.response.data)})
    }

    componentDidMount(){
        
        axios.get('/postTypes',{
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then(response=>{
                this.setState({
                    posts : response.data.postType
                });
            }).catch(error=>{console.log(error);});
            
            

            

        
    }

  render() {
        return (
            <Fragment>
                
                <form className="container-fluid vw-100 vh-15 m-0 p-0 postfl flex-column" onSubmit={e=>{this.postsubmit(e)}}>
                    
                    <input id="intro" type="text" className="postfld2 me-2 mb-3" placeholder='State Problem In One Line' onChange={(e)=>{this.setState({prob_intro : e.target.value})}}></input>
                    <select id="type" className="postfld3 me-2 mb-3" onChange={(e)=>{this.setState({prob_type : e.target.value})}}>
                        <option selected disabled>Problem Type</option>
                        {this.showtype()}
                    </select>
                    <textarea id="fullt" placeholder='Detailed Problem' className="postfld me-2 mb-3" onChange={(e)=>{this.setState({post : e.target.value})}}></textarea>
                    <button type="submit" className="btn btn-primary btn-sm btncol">POST</button>
                        
                    
                </form>
            </Fragment>
        )
  }
}

export default Post
