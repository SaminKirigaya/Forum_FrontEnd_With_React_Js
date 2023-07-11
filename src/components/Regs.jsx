import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Regs extends Component {
    constructor(){
        super();

    }
    render() {
        return (
            <Fragment>
                <div className="container-fluid bg-red regform">
                    <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center bg-dark'>
                        <form encType='multipart/form-data'>
                            <div className='row row-cols-1 row-cols-md-2 d-flex justify-content-center'>
                                <div className='col col-md-10 mb-2'><input className="form-control form-control-sm" type="text" placeholder="Email@" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><input className="form-control form-control-sm" type="text" placeholder="Password" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><input className="form-control form-control-sm" type="text" placeholder="Confirm Password" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><input className="form-control form-control-sm" type="text" placeholder="Country" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><input className="form-control form-control-sm" type="text" placeholder="Age" aria-label=".form-control-sm example" /></div>
                                <div className='col col-md-5 mb-2'><select class="form-select" aria-label="select example">
                                <option selected disabled>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">others</option>
                                </select></div>
                                <div className='col col-md-5 mb-2'><input className="form-control form-control-sm" id="formFileSm" placeholder='Profile Image' type="file" /></div>
                                <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Regs
