import React from 'react';

const BannerText = () => {
    return (
        <div>
            <div className="font-design">
                <div className="container">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="design-text">
                                <h5>Hi! I am Salikur.</h5>
                                <h1>Full-Stack Developer</h1>
                                <p>Let me help you increase business egagement with qualityful Websites and Web Applications
                                </p>


                                <a href='#about' className="btn btn-primary m-3">About Me</a>
                                <a target='blank'
                                    href="https://drive.google.com/file/d/1DaEiKKb7Wu6tGWO31D3fKzC_Jl_nnoyB/view?usp=sharing"
                                    className="btn btn-primary m-3"
                                >
                                    Download Resume
                                </a>
                                {/* <a href='k' className="portfolio-scroll">Check My Portfolio</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerText;