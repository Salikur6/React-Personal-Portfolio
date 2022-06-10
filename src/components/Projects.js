import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProjects(data);
            })
    }, [])


    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        fetch('furnitureData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFurniture(data);
            })
    }, [])




    return (
        <div>
            <section className="mt-100 mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-head">
                                <h2 className="portfolio-head-ii">Projects</h2>
                                <small className="work-sm">My recent Work</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {projects.map(project =>
                            <div className="col-lg-4 col-md-6" key={project._id}>


                                <div className="portfolio-main-design" >
                                    <div className="portfolio-img">
                                        <img src={project.img[0]} alt="" />
                                    </div>
                                    <div className="portfolio-text">
                                        <small className="portfolio-small">{project?.projectIdea}</small>
                                        <h3 className="portfolio-hhh">{project?.title}</h3>
                                        <div className="d-flex justify-content-between px-2">
                                            <Link to={project?.detailsLink} className="portfolio-btn">View Details</Link>
                                            <a className="portfolio-btn" target="blank" href={project?.liveLink}>Live Link</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}



                        {furniture.map(project =>
                            <div className="col-lg-4 col-md-6" key={project._id}>


                                <div className="portfolio-main-design" >
                                    <div className="portfolio-img">
                                        <img src={project.img[0]} alt="" />
                                    </div>
                                    <div className="portfolio-text">
                                        <small className="portfolio-small">{project?.projectIdea}</small>
                                        <h3 className="portfolio-hhh">{project?.title}</h3>
                                        <div className="d-flex justify-content-between px-2">
                                            <Link to={project?.detailsLink} className="portfolio-btn">View Details</Link>
                                            <a className="portfolio-btn" target="blank" href={project?.liveLink}>Live Link</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                        {/*                         
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/furniture.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Full-Stack Development</small>
                                    <h3 className="portfolio-hhh">Homely Furniture Werehouse</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="https://furniture-werehouse.web.app/">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/foodcatering.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Front-End Development</small>
                                    <h3 className="portfolio-hhh">Homely Food catering</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="https://fatobook-food-catering.web.app/">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/salik1.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Gridy Blogger</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="salik6/index.html">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/portfolio2.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Violet Website</h3>

                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="salik4/index.html">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/portfolio1.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Violet Website</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="salik3/index.html">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}











                        {/* ----------------------------------------------------------------------------------------------------- */}







                        {/* <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/salik5.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Travle Blogger</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank" href="salik5/index.html">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/portfolio3.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Violet Website</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank"
                                            href="https://qok7skwlryoedn8o9ucxpw-on.drv.tw/Salikur%20Islam/">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="portfolio-main-design">
                                <div className="portfolio-img">
                                    <img src="assets/img/salik6.png" alt="" />
                                </div>
                                <div className="portfolio-text">
                                    <small className="portfolio-small">Web Design</small>
                                    <h3 className="portfolio-hhh">Violet Website</h3>
                                    <div className="botton-dv">
                                        <a className="portfolio-btn" target="blank"
                                            href="https://qok7skwlryoedn8o9ucxpw-on.drv.tw/Salikur%20Islam/">Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;