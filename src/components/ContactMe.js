import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <section id="" className="contact-me mb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-tx">
                                <h2>Contact Me</h2>
                                <p>I will be happy to help you. Fill out the form <br /> and I'll be in
                                    touch as soon as possible.</p>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="contact-tx contact-bottom">
                                <div className="row">
                                    <div className="col-lg-4 main-p-remove main-wid">
                                        <div className="contact-left-side">
                                            <h5>Phone</h5>
                                            <p>+880&nbsp;1823&nbsp;85&nbsp;34&nbsp;42</p>

                                            <h5>Email</h5>
                                            <p>salikur6@gmail.com</p>

                                            <h5>Address</h5>
                                            <p>Sylhet,Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 main-p-remove">
                                        <div className="contact-right-side">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="exampleInputText"
                                                        aria-describedby="textHelp" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                                        aria-describedby="emailHelp" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="exampleInputContactPurpose"
                                                        placeholder="Contact Purpose" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                        placeholder="Your Message"></textarea>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                                <div className="contact-before-design">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;