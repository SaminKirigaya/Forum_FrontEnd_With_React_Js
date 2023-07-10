import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import propic from '../assests/images/homebg.jpg'  

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid homesize">
                    
                    <div className="row vw-90 row-cols-1 row-cols-md-2">
                        <div className="col homefirst">
                            <div className="row row-cols-1 m-0 randpost">
                                <div className="col eachpostr">
                                    <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                        <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                        <div className='col-md-6 colhpost'>
                                            <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                            <p>asassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssaaaaaaaaaaaaaasdasdasdadasdadasdasdadasddasdasdasdddddddddddddddddddddddddddddddddddddddd</p>
                                        </div>
                                        <div className="col-md-3 colhreprlikcom whitefont"><i className="fa-solid fa-flag icncol"></i>Report</div>
                                        <div className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i class="fa-solid fa-eye icncol"></i> Total View : 50k</p></div>
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i class="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> 50k</p></div>
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i class="fa-solid fa-thumbs-down icncol"></i> 40k</p></div>
                                    </div>

                                    
                                    
                                </div>
                                <div className="col eachpostr">
                                    <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                        <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                        <div className='col-md-6 colhpost'>
                                            <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                            <p>asassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                                        </div>
                                        <div className="col-md-3 colhreprlikcom whitefont"><i className="fa-solid fa-flag icncol"></i>Report</div>
                                        <div className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i class="fa-solid fa-eye icncol"></i> Total View : 50k</p></div>
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i class="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> 50k</p></div>
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i class="fa-solid fa-thumbs-down icncol"></i> 40k</p></div>
                                    </div>

                                    
                                    
                                </div>
                                <div className="col eachpostr">
                                    <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                        <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                        <div className='col-md-6 colhpost'>
                                            <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                            <p>asassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                                        </div>
                                        <div className="col-md-3 colhreprlikcom whitefont"><i className="fa-solid fa-flag icncol"></i>Report</div>
                                        <div className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i class="fa-solid fa-eye icncol"></i> Total View : 50k</p></div>
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i class="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> 50k</p></div>
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i class="fa-solid fa-thumbs-down icncol"></i> 40k</p></div>
                                    </div>
                                    

                                    
                                    
                                </div>
                                <div className="col eachpostr">
                                    <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                        <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                        <div className='col-md-6 colhpost'>
                                            <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                            <p>asassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
                                        </div>
                                        <div className="col-md-3 colhreprlikcom whitefont"><i className="fa-solid fa-flag icncol"></i>Report</div>
                                        <div className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i class="fa-solid fa-eye icncol"></i> Total View : 50k</p></div>
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i class="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> 50k</p></div>
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i class="fa-solid fa-thumbs-down icncol"></i> 40k</p></div>
                                    </div>

                                    
                                    
                                </div>
                                <div className="col eachpostr">
                                    <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                        <div className="col-md-3 p-0 colhimg"><img className="procls" src={propic}></img></div>
                                        <div className='col-md-6 colhpost'>
                                            <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                            <p>asassssssssssssssssss</p>
                                        </div>
                                        <div className="col-md-3 colhreprlikcom whitefont"><i className="fa-solid fa-flag icncol"></i>Report</div>
                                        <div className="col-md-3 colclikpost darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                        <div className="col-md-3 viewpost"><p className="whitefont"><i class="fa-solid fa-eye icncol"></i> Total View : 50k</p></div>
                                        <div className="col-md-3 viewpost2"><p className="whitefont"><i class="fa-solid fa-thumbs-up icncol pt-3 pb-3"></i> 50k</p></div>
                                        <div className="col-md-3 viewpost3"><p className="whitefont"><i class="fa-solid fa-thumbs-down icncol"></i> 40k</p></div>
                                    </div>

                                    
                                    
                                </div>
                                
                                
                            </div>
                            <div className="row row-cols-1 pagn">
                            </div>
                        </div>
                        <div className="col homesecond">
                        <div className="row row-cols-1 m-0 p-0 tppst">
                            <p className="d-flex justify-content-center p-0">LATEST POSTS</p>
                        </div>
                        <div className="row row-cols-1 tppstbody">
                            <div className="col postlatest">
                                <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                    <div className="col-md-3 p-0 imglatest"><img className="proclslatest" src={propic}></img></div>
                                    <div className='col-md-6 postfldlatest'>
                                        <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                        <p>asassssssssssssssssss</p>
                                    </div>
                                    
                                    <div className="col-md-3 clikpostltst darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                    
                                    
                                    
                                </div>

                        
                        
                            </div>

                            <div className="col postlatest">
                                <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                    <div className="col-md-3 p-0 imglatest"><img className="proclslatest" src={propic}></img></div>
                                    <div className='col-md-6 postfldlatest'>
                                        <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                        <p>asassssssssssssssssss</p>
                                    </div>
                                    
                                    <div className="col-md-3 clikpostltst darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                    
                                    
                                    
                                </div>

                        
                        
                            </div>

                            <div className="col postlatest">
                                <div className="row row-cols-1 row-cols-md-3 rowprprty darkfont">
                                    <div className="col-md-3 p-0 imglatest"><img className="proclslatest" src={propic}></img></div>
                                    <div className='col-md-6 postfldlatest'>
                                        <p>saminarnobyeasar@gmail.com &nbsp;&nbsp;<i class="fa-regular fa-circle-dot"></i> ( Posted At 3:00 AM )</p>
                                        <p>asassssssssssssssssss</p>
                                    </div>
                                    
                                    <div className="col-md-3 clikpostltst darkfont2"><p>Let's Solve <i class="fa-solid fa-circle-info"></i></p></div>
                                    
                                    
                                    
                                </div>

                        
                        
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home
