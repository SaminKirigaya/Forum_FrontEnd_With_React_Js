import React, { Component,Fragment } from 'react'
import axios from 'axios';
export class DeletePage extends Component {
    constructor(){
        super();
        this.state = {
            resdata : ''
        }
    }

    aftersubmit= ()=>{
        if(this.state.resdata){
            return <p>{this.state.resdata}</p>
        }
    }
    deleteid = (e)=>{
        e.preventDefault();
        axios.get('/delete', {
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status === 200){
                this.setState({resdata : response.data.message});
                if(response.data.message == 'Account Deleted'){
                    window.location.href = '/';
                    setTimeout(()=>{window.location.reload();},500)
                    
                }
            }
        }).catch(error=>{console.log(error)})
    }
    render() {
        return (
            <Fragment>
                <div className="delpage">
                    <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                    <div className="col col-md-10 p-3 mb-3 rulebox d-flex justify-content-center flex-row">
                        You Sure Want To Delete The Id ??? Once Deleted No Coming Back. {this.aftersubmit()}
                    </div>
                   
                   
                   
                    <div className="col-3 d-flex justify-content-center"><button onClick={e=>{this.deleteid(e)}} type="button" className="btn btn-sm btn-outline-primary btnsubdes">DELETE !</button></div>
                    </div>
                </div>
                
            </Fragment>
        )
    }
}

export default DeletePage
