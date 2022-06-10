import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to='/' className="navbar-brand" ><img className="logo-size" src="assets/img/logo.png" alt="" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/blogs'>Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <a href='#contact' className="nav-link contact">Contact Me</a>
                            </li>
                        </ul>

                        <a target="blank" className="social-link" href="https://www.facebook.com/Salikur/"><i
                            className="icofont-facebook icon"></i></a>
                        <a target="blank" className="social-link" href="#h"><i className="icofont-linkedin icon"></i></a>
                        <a target="blank" className="social-link" href="#h"><i className="icofont-skype icon"></i></a>


                        <form className="d-flex">


                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;