import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div className="menuBar">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#"><img src={logo} height="45px" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link to="/home">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Event</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <Link to="/login">
                                <li className="nav-item">
                                    <button className="btn btn-primary">Register</button>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <button className="btn btn-dark">Admin</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;