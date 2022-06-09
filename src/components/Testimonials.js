import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <div className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimo-hd">
                                <h2>Testimonials</h2>
                                <small>What client say about me</small>
                            </div>
                        </div>

                        <div className="main-cont owl-carousel owl-theme owl-loaded">
                            <div className="slider-item">
                                <div className="img1">
                                    <img src="assets/img/client.jpg" alt="" />
                                </div>
                                <div className="slide-tx">
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment </p>
                                    <h5>Jonkin Jullinor</h5>
                                    <p style={{ fontSize: '14px' }}>President of Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="img1">
                                    <img src="assets/img/client.jpg" alt="" />
                                </div>
                                <div className="slide-tx">
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment</p>
                                    <h5>Jonkin Jullinor</h5>
                                    <p style={{ fontSize: '14px' }}>President of Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="img1">
                                    <img src="assets/img/client.jpg" alt="" />
                                </div>
                                <div className="slide-tx">
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                        beguiled and demoralized by the charms of pleasure of the moment </p>
                                    <h5>Jonkin Jullinor</h5>
                                    <p style={{ fontSize: '14px' }}>President of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;