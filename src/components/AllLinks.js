import React from 'react';
import { Link } from 'react-router-dom';

const AllLinks = () => {
    return (
        <div>
            <div className="all-links">
                <div className="container extra-p">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Links</h4>
                                <ul>
                                    <li><Link to='/'>Home</Link></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Follow Me</h4>
                                <ul>
                                    <li><a target="blank" href="https://www.facebook.com/Salikur/">Facebook</a></li>
                                    <li><a target="blank" href="https://www.linkedin.com/in/salikur-islam/">Linkedin</a></li>
                                    <li><a target="blank" href="https://github.com/Salikur6">Github</a></li>
                                    <li><a target="blank" href="https://join.skype.com/invite/yehjKHX97ddV">Skype</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Resource</h4>
                                <ul>
                                    <li><Link to=''>Blog</Link></li>

                                </ul>
                            </div>
                        </div>





                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Hire Me</h4>
                                <ul>
                                    <li><a target="blank" href="https://www.upwork.com/freelancers/~01bd6c0f515e180611">Upwork
                                        Profile</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllLinks;