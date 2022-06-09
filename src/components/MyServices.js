import React from 'react';

const MyServices = () => {
    return (
        <div>
            <section id="services" className="my-services mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mt-100">
                            <div className="services-item">
                                <div className="service-text service-width">
                                    <img className="main-service" src="img/open-24-hours.png" alt="" />
                                    <h2>MY SERVICES</h2>
                                    <p className="my-service-p">Lorem 1960s with the release of Letraset sheets containing.
                                        recently with desktop publishing software like Aldus PageMaker including versions of
                                        Lorem Ipsum</p>

                                    <div className="row">
                                        <div className="col-lg-6 col-6 extra-margin">
                                            <h4>1+</h4>
                                            <p>Years of <br />exprience</p>
                                        </div>


                                        <div className="col-lg-6 col-6 extra-margin">
                                            <h4>10+</h4>
                                            <p>Project<br />completed.</p>
                                        </div>

                                        <div className="col-lg-6 col-6 extra-margin">
                                            <h4>8+</h4>
                                            <p>Awesome <br /> clients</p>
                                        </div>

                                        <div className="col-lg-6 col-6 extra-margin">
                                            <h4>80+</h4>
                                            <p>Hours of <br />coding</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="services-item">
                                <div className="service-text flex">
                                    <div className="item first-d">

                                        <div className="service-divided divided-one">
                                            <img src="assets/img/devices.png" alt="" />
                                            <h2>WEB DESIGN</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>

                                        <div className="service-divided divided-two">
                                            <img src="assets/img/programming.png" alt="" />
                                            <h2>WEB DEVELOPMENT</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>

                                    <div className="item second-d">
                                        <div className="service-divided divided-three">
                                            <img src="assets/img/wordpress.png" alt="" />
                                            <h2>WORDPRESS</h2>
                                            <p>Looking for a powerful, compact and a high-performing WordPress website? You're
                                                in the right place.</p>
                                        </div>
                                        <div className="service-divided divided-four">
                                            <img src="assets/img/aplication.png" alt="" />
                                            <h2>MY SERVICES</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyServices;