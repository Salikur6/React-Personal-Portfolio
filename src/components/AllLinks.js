import React from 'react';

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
                                    <li><a target="blank" href="#">Home</a></li>
                                    <li><a target="blank" href="#">Free Templates</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Follow Me</h4>
                                <ul>
                                    <li><a target="blank" href="#">Facebook</a></li>
                                    <li><a target="blank" href="#">LinkedIn</a></li>
                                    <li><a target="blank" href="#">Github</a></li>
                                    <li><a target="blank" href="#">Skype</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Resource</h4>
                                <ul>
                                    <li><a target="blank" href="#">Blog</a></li>
                                    <li><a target="blank" href="#">My Resources</a></li>
                                    <li><a target="blank" href="#">Useful Links</a></li>
                                </ul>
                            </div>
                        </div>





                        <div className="col-lg-3 col-sm-6">
                            <div className="links-tx">
                                <h4>Hire Me</h4>
                                <ul>
                                    <li><a target="blank" href="#">Fiverr Profile</a></li>
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