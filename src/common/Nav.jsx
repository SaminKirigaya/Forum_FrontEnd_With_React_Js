import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useParams, useHistory, useLocation} from "react-router-dom"

export class Nav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navdes">
                    <div className="container-fluid">
                        <Link className="navbar-brand mx-md-5" to="#">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse me-auto nav-underline" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item mx-sm-auto">
                                    <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                                </li>
                                
                                <li className="nav-item mx-sm-auto dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Problem Types
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item mx-sm-auto" href="#">Action</a></li>
                                        <li><a className="dropdown-item mx-sm-auto" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item mx-sm-auto" href="#">Something else here</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item mx-sm-auto">
                                    <Link className="nav-link" to="#">Privacy Policy</Link>
                                </li>
                            
                            </ul>
                            <form className="d-flex justify-content-center align-items-center me-auto" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btnsearch" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>

                                
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-auto">
                                    <li className="nav-item mx-sm-auto">
                                        <Link className="nav-link" to="#">Login</Link>
                                    </li>

                                    <li className="nav-item mx-sm-auto">
                                        <Link className="nav-link" to="#">Registration</Link>
                                    </li>
                                </ul>

                            
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Nav